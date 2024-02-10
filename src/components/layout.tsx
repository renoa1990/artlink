"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@theme/index";
import { FC, ReactNode } from "react";
import { Footer } from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
