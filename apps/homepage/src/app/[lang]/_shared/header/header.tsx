"use client";
import { UiViewport, Breakpoints } from "@uireact/foundation";
import { SmallNavbar } from "../smallNavbar";
import { LargeNavbar } from "../largeNavbar";


type HeaderProps = {
  loc: {
    [x in string]: string;
  };
};

export function Header({ loc }: HeaderProps) {

  return (
    <>
      <UiViewport criteria="m|l|xl">
        <LargeNavbar loc={loc}/>
      </UiViewport>
      <UiViewport criteria={Breakpoints.SMALL}>
        <SmallNavbar/>
      </UiViewport>
    </>
  );
}
