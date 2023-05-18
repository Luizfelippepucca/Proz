import { ReactElement } from "react";

export interface LayoutProps {
  children: ReactElement;
  click: () => void;
  notifications: number;
}
