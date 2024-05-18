"use client";

import { useEffect, useState } from "react";

import { FadeIn } from "./Effects/FadeIn";

const navigations = [
  { name: "Projects", href: "top" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul
        className="flex rounded-full bg-slate-800/40 px-3 text-xs font-medium text-zinc-200  
      shadow-lg ring-1 ring-white/10 backdrop-blur-sm  
      sm:text-sm "
      >
        {navigations.map((nav) => (
          <li key={nav.name}>
            <button
              type="button"
              className="relative block px-3 py-2 transition hover:text-cyan-400"
              onClick={() => {
                if (nav.href === "top") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  return;
                }
                const section = document.querySelector(`#${nav.href}`);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {nav.name}
            </button>
            {/* <a
              href={`#${nav.href}`}
              className="relative block px-3 py-2 transition hover:text-cyan-400"
            >
              {nav.name}
            </a> */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`fixed left-1/2 top-0 z-50 -translate-x-1/2 transition-all duration-500 lg:hidden ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="z-10 h-16 pt-4">
        <FadeIn side="down">
          <DesktopNavigation className="pointer-events-auto" />
        </FadeIn>
      </div>
    </header>
  );
}
