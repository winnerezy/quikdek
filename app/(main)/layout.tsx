"use client";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { NewFolderModal } from "@/components/NewFolderModal";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <section className="w-full flex relative">
        <Sidebar />
        <main className="flex flex-col w-full min-h-screen">
          {children}
          <Footer />
        </main>
      </section>
      <NewFolderModal />
    </Provider>
  );
}
