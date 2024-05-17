import { useEffect, useState } from "react";
import { useSectionContext } from "./SectionContext";

function getVisibility(element: HTMLElement) {
  const viewportHeight = window.innerHeight;
  const rect = element.getBoundingClientRect();

  const topVisible = rect.top >= 0 && rect.top < viewportHeight;
  const bottomVisible = rect.bottom > 0 && rect.bottom < viewportHeight;

  if (topVisible && bottomVisible) {
    // The whole element is visible
    return 1;
  } else if (topVisible) {
    // Only the top part of the element is visible
    return (viewportHeight - rect.top) / rect.height;
  } else if (bottomVisible) {
    // Only the bottom part of the element is visible
    return rect.bottom / rect.height;
  } else {
    // The element is not visible
    return 0;
  }
}

function NavbarElement({
  href,
  title,
  isActive,
}: {
  href: string;
  title: string;
  isActive: boolean;
}) {
  return (
    <li>
      <a className={`group flex items-center py-3 `} href={href}>
        <span
          className={`nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all ${isActive ? "!w-16 !bg-zinc-200" : "group-hover:w-16 group-hover:bg-zinc-200"} group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none`}
        ></span>
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest text-zinc-500 ${isActive ? "!text-zinc-200" : "group-hover:text-zinc-200"} group-focus-visible:text-zinc-200`}
        >
          {title}
        </span>
      </a>
    </li>
  );
}

const navItems = [
  {
    id: "projects",
    href: "#projects",
    title: "Projects",
  },
  {
    id: "experience",
    href: "#experience",
    title: "Experience",
  },
  {
    id: "contact",
    href: "#contact",
    title: "Contact",
  },
];

export default function SideNavbar() {
  const [activeSection, setActiveSection] = useState("projects");
  const { aboutSection, projectsSection, experienceSection, contactSection } =
    useSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        aboutSection,
        projectsSection,
        experienceSection,
        contactSection,
      ];

      let maxVisibility = 0;
      let activeSection = "";

      sections.forEach((section) => {
        if (section.ref.current) {
          const visibility = getVisibility(section.ref.current);
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            activeSection = section.ref.current.id;
          }
        }
      });

      if (activeSection) setActiveSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((navItem) => (
          <NavbarElement
            key={navItem.title}
            href={navItem.href}
            title={navItem.title}
            isActive={activeSection === navItem.id}
          />
        ))}
      </ul>
    </nav>
  );
}
