"use client";
import { UiView } from "@uireact/view";

export const ViewWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div style={{paddingBottom: '70px'}}>
    <UiView>{children}</UiView>
  </div>
);
