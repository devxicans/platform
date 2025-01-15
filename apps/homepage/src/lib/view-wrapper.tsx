"use client";
import { UiView } from "@uireact/view";

export const ViewWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <UiView>
    <div style={{ paddingBottom: "70px" }}>{children}</div>
  </UiView>
);
