"use client";
import styles from "./mobileButton.module.scss";
import Link from "next/link";
import { UiIcon, UiIconProps } from "@uireact/icons";

type menuButtonProps = {
  icon: UiIconProps["icon"];
  href: string;
  active?: boolean;
};

export function MobileButton({ icon, href, active }: menuButtonProps) {
  return (
      <Link href={href} className={styles.button}>
        <UiIcon icon={icon} size="large" category={active ? "tertiary" : "secondary"}/>
      </Link>
  );
}
