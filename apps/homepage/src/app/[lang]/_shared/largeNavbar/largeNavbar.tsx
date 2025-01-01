"use client";
import styles from "./largeNavbar.module.css";
import { IconLink } from "@1xdev/ui";
import buttons from "../header/buttons.json";
import { UiIconProps } from "@uireact/icons";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type HeaderProps = {
  loc: {
    [x in string]: string;
  };
};

export function LargeNavbar({ loc }: HeaderProps) {
  const pathname = usePathname();

  const formattedPath = useMemo(() => {
      const cleanedPath = pathname.replace(/^\/(es|en)/, "");
      return cleanedPath === "" ? "/" : cleanedPath;
  }, [pathname]);

  return (
    <>
      <div className={styles.main} data-testid="header">
        <h1>
          @1<span className={styles.spanText}>x</span>Dev
        </h1>
        <div className={styles.buttonMenu}>
          {buttons.map((button, index) => {
            const isActive = button.href === formattedPath;
            return (
              <IconLink
                key={index}
                href={button.href}
                icon={button.icon as UiIconProps["icon"]}
                active={isActive}
              >
                {loc[button.key]}
              </IconLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
