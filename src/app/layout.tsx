import type { ReactNode } from "react";
import "./globals.css";

/** Root shell — locale layout provides <html>/<body>. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
