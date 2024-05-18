import React, { createContext, useRef, RefObject, useContext } from "react";

interface SectionContextProps {
  aboutSection: { ref: RefObject<HTMLDivElement>; id: "about" };
  projectsSection: { ref: RefObject<HTMLDivElement>; id: "projects" };
  experienceSection: { ref: RefObject<HTMLDivElement>; id: "experience" };
  contactSection: { ref: RefObject<HTMLDivElement>; id: "contact" };
}

export const SectionContext = createContext<SectionContextProps | null>(null);

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error(
      "useSectionContext must be used within a SectionContextProvider",
    );
  }
  return context;
}
export function SectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <SectionContext.Provider
      value={{
        aboutSection: { ref: aboutRef, id: "about" },
        projectsSection: { ref: projectsRef, id: "projects" },
        experienceSection: { ref: experienceRef, id: "experience" },
        contactSection: { ref: contactRef, id: "contact" },
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}
