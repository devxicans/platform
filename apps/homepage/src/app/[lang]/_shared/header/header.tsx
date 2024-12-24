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
            <MenuButton href="/" icon="Home">{loc.homeLink}</MenuButton>
            <MenuButton href="/projects" icon="Layers">{loc.projectsLink}</MenuButton>
            <MenuButton href="/contact" icon="Mail">{loc.contactLink}</MenuButton>
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
