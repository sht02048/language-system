import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import SideBar from "../SideBar";

export default function MainLayout({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <div className="flex">
        <SideBar />
        <main className="w-full">{children}</main>
      </div>
    </NextThemesProvider>
  );
}
