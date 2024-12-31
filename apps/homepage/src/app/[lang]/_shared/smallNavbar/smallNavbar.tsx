"use client";
import styles from "./smallNavbar.module.css";
import { MobileButton } from "../mobileButton";
import { usePathname } from "next/navigation";
import buttons from "../header/buttons.json";
import { UiIconProps } from "@uireact/icons";
import { useMemo } from "react";

export function SmallNavbar() {
  const pathname = usePathname();

  const formattedPath = useMemo(() => {
    const getFormattedPath = (pathname: string) => {
      const cleanedPath = pathname.replace(/^\/(es|en)/, "");
      return cleanedPath === "" ? "/" : cleanedPath;
    };
    return getFormattedPath(pathname);
  }, [pathname]);

  return (
    <>
      <div className={styles.mobileHeader}>
        <h1>
          @1<span className={styles.spanText}>x</span>Dev
        </h1>
      </div>
      <div className={styles.mobileMenu}>
        {buttons.map((button) => {
          return (
            <MobileButton
              icon={button.icon as UiIconProps["icon"]}
              href={button.href}
              active={formattedPath === button.href}
            />
          );
        })}
      </div>
    </>
  );
}
