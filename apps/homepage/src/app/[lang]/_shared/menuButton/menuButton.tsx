"use client";
import styles from "./menuButton.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

type menuButtonProps = {
  text: string;
  href: string;
};

export function MenuButton({ text, href }: menuButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      <motion.div
        whileHover={{ y: 8 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {text}
      </motion.div>
    </Link>
  );
}
