import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible"
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Quikdek",
  description: "Study smater and easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PlausibleProvider domain="https://quikdek.vercel.app"/>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
