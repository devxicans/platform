"use client";
import styles from "./smallNavbar.module.css";
import { MobileButton } from "../mobileButton";
import { Breakpoints, UiViewport } from "@uireact/foundation";
import { usePathname } from "next/navigation";


export function SmallNavbar() {
  const pathname = usePathname();
  const getFormattedPath = (pathname : string) =>{
    const cleanedPath = pathname.replace(/^\/(es|en)/, "");
    return cleanedPath === "" ? "/" : cleanedPath;
  }  

  const formattedPath = getFormattedPath(pathname);

  return (
      <UiViewport criteria={Breakpoints.SMALL}>
        <div className={styles.mobileHeader}>
          <h1>@1<span className={styles.spanText}>x</span>Dev</h1>
        </div>
        <div className={styles.mobileMenu}>
          <MobileButton icon="Home" href="/" active={formattedPath==="/"}/>
          <MobileButton icon="Layers" href="/projects" active={formattedPath === "/projects"}/>
          <MobileButton icon="Mail" href="/contact" active={formattedPath === "/contact"}/>
        </div>
      </UiViewport>
  );
}
