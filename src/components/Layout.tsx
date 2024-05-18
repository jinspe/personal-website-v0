"use client";

import PageSpotlight from "./Effects/PageSpotlight";
import { Navbar } from "./Navbar";
import { SectionContextProvider } from "./SectionContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="mx-auto max-w-screen-xl px-6 pb-24 lg:px-12 lg:pb-0"
      id="about"
    >
      <SectionContextProvider>
        <Navbar />
        <PageSpotlight />
        {children}
      </SectionContextProvider>
    </main>
  );
}
