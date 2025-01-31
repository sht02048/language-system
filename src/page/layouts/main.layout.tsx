import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SideBar } from "@/src/widgets/sideBar";

export default function MainLayout({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <div className="flex">
        <SideBar />
        <main className="w-full overflow-x-hidden">
          <div className="m-2">
            <div className="bg-[#101011] rounded-md h-screen border-[0.5px]">
              {children}
            </div>
          </div>
        </main>
      </div>
    </NextThemesProvider>
  );
}
