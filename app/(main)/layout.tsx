"use client";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { NewFolderModal } from "@/components/NewFolderModal";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

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
     <div className="w-full relative flex flex-col min-h-screen">
      <Header/>
     <section className="w-full flex">
        <Sidebar />
        <main className="flex flex-col w-full min-h-screen px-4 mb-16 lg:ml-[250px]">
          {children}
          {/* <Footer /> */}
        </main>
      </section>
     </div>
      <NewFolderModal />
      <Toaster />
    </Provider>
  );
}
