"use client";
import { UiView } from "@uireact/view";

const styles = {
  paddingBottom: "70px"
}

export const ViewWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <UiView>
    <div style={styles}>{children}</div>
  </UiView>
);
