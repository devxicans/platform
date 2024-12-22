"use client";
import styles from "./menuButton.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

type menuButtonProps = {
  children: React.ReactNode;
  href: string;
};

export function MenuButton({ children, href }: menuButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      <motion.div
        whileHover={{ y: 8 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
