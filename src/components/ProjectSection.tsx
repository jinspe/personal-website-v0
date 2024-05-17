import {
  neuroMuscularVideo,
  eggSorterVideo,
  multimodalVRVideo,
  qwestiveQAVideo,
  qwestiveRefVideo,
  qwestiveCRMVideo,
  solsponsorVideo,
} from "~/assets";
import { FadeIn } from "./Effects/FadeIn";
import { useSectionContext } from "./SectionContext";

interface Project {
  title: string;
  link: string;
  videoPath: string;
}

const projects: Project[] = [
  {
    title:
      "Creating an Adaptive Neuromuscular Controller for an Assistive Lower-Limb Exoskeleton",
    link: "https://example.com",
    videoPath: neuroMuscularVideo,
  },
  {
    title: "Improving User Interactions in VR Productivity Environments",
    link: "https://example.com",
    videoPath: multimodalVRVideo,
  },
  {
    title: "CRM and Engagement Event platform for Token Communities",
    link: "https://example.com",
    videoPath: qwestiveCRMVideo,
  },
  {
    title:
      "Deep Learning Framework for Miniature Biological Entities Classification",
    link: "https://example.com",
    videoPath: eggSorterVideo,
  },
  {
    title: "Patreon-like platform with on-chain transactions and NFTS",
    link: "https://example.com",
    videoPath: solsponsorVideo,
  },
  {
    title: "Web3 marketing platform and referral system",
    link: "https://example.com",
    videoPath: qwestiveRefVideo,
  },
  {
    title: "On-chain question bidding platform with refunds upon expiration.",
    link: "https://example.com",
    videoPath: qwestiveQAVideo,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn>
      <div className=" flex flex-col gap-5 sm:flex-row">
        <video
          src={project.videoPath}
          autoPlay
          loop
          muted
          controls
          className=" sm:w-3/5"
        ></video>
        <div>
          <h2 className="text-xl font-medium leading-tight text-zinc-200">
            {project.title}
          </h2>
          <a href={project.link}>View Project</a>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ProjectSection() {
  const { projectsSection } = useSectionContext();

  return (
    <section id={projectsSection.id} ref={projectsSection.ref}>
      <FadeIn>
        <h2 className="eyebrow">Projects</h2>
      </FadeIn>
      <div className="mt-5 space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
