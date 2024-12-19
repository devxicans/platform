'use client'
import { UiView } from '@uireact/view';

export const ViewWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <UiView>
    {children}
  </UiView>
);