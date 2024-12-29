"use client";
import styles from "./header.module.scss";
import { IconLink } from "@1xdev/ui";
import { MobileButton } from "../mobileButton";
import { Breakpoints, UiViewport } from "@uireact/foundation";
import buttons from "./buttons.json";
import { UiIconProps } from "@uireact/icons";
import { usePathname } from "next/navigation";

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
      <UiViewport criteria={Breakpoints.SMALL}>
        <div className={styles.mobileHeader}>
          <h1>@1<span className={styles.spanText}>x</span>Dev</h1>
        </div>
        <div className={styles.mobileMenu}>
          <MobileButton icon="Home" href="/"/>
          <MobileButton icon="Layers" href="/projects"/>
          <MobileButton icon="Mail" href="/contact"/>
        </div>
      </UiViewport>
    </>
  );
}
