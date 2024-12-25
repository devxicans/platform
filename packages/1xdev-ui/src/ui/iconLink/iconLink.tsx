"use client";
import styles from "./iconLink.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { UiIcon, UiIconProps } from "@uireact/icons";
import { useState, useCallback } from "react";

type iconLinkProps = {
  children: React.ReactNode;
  href: string;
  icon: UiIconProps["icon"];
};

export function IconLink({ children, href, icon }: iconLinkProps) {
  const [showIcon, setShowIcon] = useState(false);

  const onMouseEnter = useCallback(() => {
    setShowIcon(true);
  }, [setShowIcon]);

  const onMouseLeave = useCallback(() => {
    setShowIcon(false);
  }, [setShowIcon]);

  return (
    <Link href={href} className={styles.button} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <motion.div
        whileHover={{ y: 8 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={styles.animation}
      >
        {showIcon &&
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4}}
          >
          <UiIcon icon={icon} category="tertiary"/>
        </motion.div>
        }
        {children}
      </motion.div>
    </Link>
  );
}
