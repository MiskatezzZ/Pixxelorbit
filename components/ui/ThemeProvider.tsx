"use client";

import type { ReactNode } from "react";

export default function ThemeProvider(props: {
  children: ReactNode;
}) {
  const { children } = props;
  return children;
}
