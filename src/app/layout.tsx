import Nav from "@/components/nav";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bouletteproof Website Analytics",
  description: "Bouletteproof Website Analytics Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="dark:bg-medium">
        <header>
          <Nav />
        </header>
        <main className="mt-[96px]">{children}</main>
      </body>
    </html>
  );
}
