'use client'
import { UiView } from '@uireact/view';

export const ViewWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <UiView>
    {children}
  </UiView>
);