import type { Metadata } from "next";
import { Suspense } from 'react';
import Loading from '@/app/loading';
import global from "@/app/styles/global.module.scss";

export const metadata: Metadata = {
  title: "Игра на внимание",
  description: "Игры для детей дошкольного возраста",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={global.resetStyle}>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
      </body>
    </html>
  );
}
