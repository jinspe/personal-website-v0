import { useEffect, useState } from "react";
import { useSectionContext } from "./SectionContext";

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
          className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${isActive ? "!w-16 bg-slate-200" : "group-hover:w-16 group-hover:bg-slate-200"} group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
        ></span>
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${isActive ? "text-slate-200" : "group-hover:text-slate-200"} group-focus-visible:text-slate-200`}
        >
          {title}
        </span>
      </a>
    </li>
  );
}

const navItems = [
  {
    id: "about",
    href: "#about",
    title: "About",
  },
  {
    id: "experience",
    href: "#experience",
    title: "Experience",
  },
  {
    id: "projects",
    href: "#projects",
    title: "Projects",
  },
];

export default function SideNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const { aboutSection, projectsSection, experienceSection, contactSection } =
    useSectionContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (aboutSection.ref.current) observer.observe(aboutSection.ref.current);
    if (projectsSection.ref.current)
      observer.observe(projectsSection.ref.current);
    if (experienceSection.ref.current)
      observer.observe(experienceSection.ref.current);
    if (contactSection.ref.current)
      observer.observe(contactSection.ref.current);

    return () => {
      if (aboutSection.ref.current)
        observer.unobserve(aboutSection.ref.current);
      if (projectsSection.ref.current)
        observer.unobserve(projectsSection.ref.current);
      if (experienceSection.ref.current)
        observer.unobserve(experienceSection.ref.current);
      if (contactSection.ref.current)
        observer.unobserve(contactSection.ref.current);
    };
  }, [aboutSection, projectsSection, experienceSection, contactSection]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <p>kk: {activeSection}</p>
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
