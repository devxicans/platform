"use client";
import styles from "./header.module.scss";
import { MenuButton } from "../menuButton";
import { MobileButton } from "../mobileButton";
import { Breakpoints, UiViewport } from "@uireact/foundation";

type HeaderProps = {
  loc: {
    [x in string]: string;
  };
};

export function Header({ loc }: HeaderProps) {
  return (
    <>
      <UiViewport criteria="m|l|xl">
        <div className={styles.main} data-testid="header">
          <h1>@1<span className={styles.spanText}>x</span>Dev</h1>
          <div className={styles.buttonMenu}>
            <MenuButton text={loc.menuBtn1} href="/" />
            <MenuButton text={loc.menuBtn2} href="/projects" />
            <MenuButton text={loc.menuBtn3} href="/contact" />
          </div>
        </div>
      </UiViewport>
      <UiViewport criteria={Breakpoints.SMALL}>
        <div className={styles.mobileMenu}>
          <MobileButton icon="Home" href="/"/>
          <MobileButton icon="Layers" href="/projects"/>
          <MobileButton icon="Mail" href="/contact"/>
        </div>
      </UiViewport>
    </>
  );
}
