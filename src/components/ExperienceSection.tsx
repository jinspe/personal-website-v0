import { FadeIn } from "./Effects/FadeIn";
import ShinySpotlightBorders from "./Effects/ShinySpotlightBorders";
import LinkWithArrow from "./LinkWithArrow";

interface IExperience {
  title?: string;
  company: string;
  additionalTitle?: string;
  href: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

const experiences: IExperience[] = [
  {
    // title: "Full-stack Developer",
    // company: "Flagstonelab",
    href: "https://flagstonelab.com",
    company: "Independent Software Engineer",
    location: "Geneva, Switzerland",
    startDate: "Nov 2023",
    endDate: "Current",
    description: `Developed fully customizable and optimized lightweight Shopify theme app extensions and Bubble.io widgets, seamlessly delivered to high-traffic websites via CDN without compromising performance. 
      Created a range of optimized, responsive, and accessible widgets, ensuring excellent display across all devices and screen sizes. 
      Implemented scalable data pipelines using web scraping techniques and diverse APIs, leveraging Google Cloud services. Bootstrapping Micro SaaS products.`,
    skills: [
      "Webpack",
      "Typescript",
      "Liquid",
      "GraphQL",
      "Tailwind",
      "UX",
      "Accessibility",
      "Data Pipeline Architecture",
      "Google Cloud",
    ],
  },
  {
    title: "Co-Founder & CTO",
    additionalTitle: "Full-stack Engineer",
    href: "https://www.qwestive.io",
    company: "Qwestive",
    location: "Remote / Paris, France",
    startDate: "Nov 2021",
    endDate: "Nov 2023",
    description: `Designed and developed three web applications, recognized with awards in hackathons, and selected for incubation by Binance and Google Startups. 
    Iterating towards Product-Market Fit, orchestrated advanced features and complex user flows, including smart-contract tracking, multisig transactions, embedded tracking scripts, APIs, form builders, token gating, analytic dashboards, and more. 
    Led the development of a rapid solution architecture, maintaining a clean, modular, and easily maintainable codebase. 
    Executed Continuous Integration/Deployment, pull requests, code reviews, recruitments, and comprehensive testing.`,
    // description:
    //  "Led the design and development of three web applications, recognized with awards in hackathons, and selected for incubation by Binance and Google startups program. Iterating our way to Product Market Fit, I orchestrated advanced features and complex user flows, including smart-contract tracking, multisig transactions, embedded tracking scripts, APIs, form builders, token gating, and analytic dashboards. Elected CTO for the team, showcasing rapid solution architecture and implementation skills while maintaining a clean, modular, and easily maintainable codebase. Oversaw optimal developer environment and documentation for efficient next-day updates based on customer requests. Executed Continuous Integration/Deployment Pipeline Integration, pull requests, code reviews, and comprehensive testing.",
    skills: [
      "Agile",
      "Full-stack",
      "Entrepreneurship",
      "Web3",
      "EVM",
      "Typescript",
      "React",
      "Next.js",
      "CI/CD",
      "Figma",
      "DevOps",
      "System Architecture",
      "Distributed Systems",
      "Database Design",
    ],
  },
  {
    title: "Computer Vision Research Engineer",
    company: "Logitech",
    href: "https://logitech.github.io/inksupport/",
    location: "Lausanne, Switzerland",
    startDate: "Aug 2020",
    endDate: "May 2021",
    description: `Developed VR applications in Unity to measure and test the ergonomics of various input modalities, contributing to Logitech's stylus measurement, comparison, and improvement efforts. 
      Conducted user experiments on VR input modalities, adapting ISO 9241-411 and Fitts law for 3D interactions. 
      Researched and developed virtual keyboards, including surface-aligned designs and models with integrated hardware components. 
      Integrated hand tracking into Logitech's virtual meeting VR app using gestures.`,
    skills: [
      "VR",
      "Unity",
      "UX",
      "C#",
      "Oculus",
      "Experimental Design",
      "Electronics Development",
    ],
  },
  {
    title: "Software Engineer",
    additionalTitle: "Internship",
    company: "SquareFactory",
    href: "https://deepsquare.io",
    location: "Lonay, Switzerland",
    startDate: "Feb 2020",
    endDate: "Aug 2020",
    description: `Enhanced the gait of the Autonomyo exoskeleton in OpenSim by significantly improving natural movement simulation. 
    Utilized CMA-ES for actuator optimization, achieving a realistic gait that addresses muscle weaknesses. 
    Integrated and optimized a neuromuscular controller, advancing the project’s simulation accuracy.`,
    skills: ["Python", "3D Modeling", "OpenSim", "CMAES", "C++"],
  },
  {
    title: "Machine Learning Engineer",
    company: "Bionomous",
    additionalTitle: "Internship",
    location: "Fribourg, Switzerland",
    href: "https://bionomous.ch/",
    startDate: "Sept 2019",
    endDate: "Feb 2020",
    description: `
      Improved miniature biological entities classification from 90% to nearly 100% accuracy by transitioning from a Gaussian mixture model to a deep learning framework. 
      Created a framework for classification tasks with convolutional neural networks, ensuring reliability and device integration.`,
    skills: [
      "Python",
      "Keras",
      "Tensorflow",
      "Machine Learning",
      "Deep Learning",
    ],
  },
];

function Skills({ skills }: { skills: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {skills.map((skill) => (
        <li key={skill} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
            {skill}
          </div>
        </li>
      ))}
    </ul>
  );
}

function ExperienceCard({ experience }: { experience: IExperience }) {
  return (
    <FadeIn>
      <ShinySpotlightBorders>
        <div className="group relative transition-all md:hover:!opacity-100 md:group-hover/list:opacity-50">
          <div
            className="bg-slate-black absolute inset-0 z-0 rounded-md transition motion-reduce:transition-none  
            md:group-hover:bg-slate-900/50"
          />
          <div className="grid px-4 py-6 sm:grid-cols-8 sm:gap-8 md:gap-4">
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 sm:col-span-2"
              aria-label="2018 to 2024"
            >
              {experience.startDate} — {experience.endDate}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-zinc-100">
                <div>
                  <LinkWithArrow
                    href={experience.href}
                    title={experience.company}
                    prevTitle={experience.title}
                    fullContainer
                  />
                  {experience.additionalTitle && (
                    <div
                      className="font-medium text-zinc-400"
                      aria-hidden="true"
                    >
                      {experience.additionalTitle}
                    </div>
                  )}
                  {/* <div className="text-zinc-200" aria-hidden="true">
                    {experience.company}
                  </div> */}
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal text-zinc-400">
                {experience.description}
              </p>
              <Skills skills={experience.skills} />
            </div>
          </div>
        </div>
      </ShinySpotlightBorders>
    </FadeIn>
  );
}

export default function ExperienceSection() {
  return (
    <section
      className="relative z-0"
      id="experience"
      /* className="relative z-0 mt-24 sm:mt-32 lg:mt-40" id="experience" */
    >
      <FadeIn>
        <h2 className="eyebrow">Experience</h2>
      </FadeIn>

      <div>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
