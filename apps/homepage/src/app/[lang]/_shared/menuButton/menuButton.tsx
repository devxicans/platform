"use client";
import styles from "./menuButton.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { UiIcon, UiIconProps } from "@uireact/icons";
import { useState } from "react";

type menuButtonProps = {
  children: React.ReactNode;
  href: string;
  icon: UiIconProps["icon"];
};

export function MenuButton({ children, href, icon }: menuButtonProps) {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <Link href={href} className={styles.button} onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
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
