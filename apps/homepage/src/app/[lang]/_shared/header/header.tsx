"use client";
import styles from "./header.module.scss";
import { IconLink } from "@1xdev/ui";
import { UiViewport } from "@uireact/foundation";
import buttons from "./buttons.json";
import { UiIconProps } from "@uireact/icons";
import { usePathname } from "next/navigation";
import { SmallNavbar } from "../smallNavbar";

type HeaderProps = {
  loc: {
    [x in string]: string;
  };
};

export function Header({ loc }: HeaderProps) {
  const pathname = usePathname();
  
  return (
    <>
      <UiViewport criteria="m|l|xl">
        <div className={styles.main} data-testid="header">
          <h1>@1<span className={styles.spanText}>x</span>Dev</h1>
          <div className={styles.buttonMenu}>
            {buttons.map((button, index) => {
              const isActive = 
                (button.href === "/" && (pathname === "/en" || pathname === "/es")) || 
                pathname === (`/en${button.href}`) || 
                pathname === (`/es${button.href}`);
              return(
                  <IconLink key={index} href={button.href} icon={button.icon as UiIconProps["icon"]} active={isActive}>
                    {loc[button.key]}
                  </IconLink>
              );
            })}
          </div>
        </div>
      </UiViewport>
      <SmallNavbar/>
    </>
  );
}
