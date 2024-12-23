"use client";
import styles from "./mobileButton.module.scss";
import Link from "next/link";
import { UiIcon, UiIconProps } from "@uireact/icons";

type menuButtonProps = {
  icon: UiIconProps["icon"];
  href: string;
};

export function MobileButton({ icon, href }: menuButtonProps) {
  return (
      <Link href={href} className={styles.button}>
        <UiIcon icon={icon} size="large"/>
      </Link>
  );
}
