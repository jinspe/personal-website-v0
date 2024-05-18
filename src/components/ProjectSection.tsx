import {
  neuroMuscularVideo,
  eggSorterVideo,
  multimodalVRVideo,
  // qwestiveQAVideo,
  qwestiveRefVideo,
  qwestiveCRMVideo,
  solsponsorVideo,
  buildBuddyVideo,
} from "~/assets";
import { FadeIn } from "./Effects/FadeIn";
import { useSectionContext } from "./SectionContext";
import TagsCloud from "./Common/TagsCloud";

interface Project {
  title: string;
  description: string;
  videoPath: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Build Buddy",
    description: "Furniture assembly instructions in 3D 🔨",
    videoPath: buildBuddyVideo,
    tags: ["VR/AR", "Unity", "C#"],
  },
  {
    title: "Web3 CRM",
    description: "CRM and Engagement Event platform for Token Communities",
    videoPath: qwestiveCRMVideo,
    tags: ["Full-stack", "React", "Typescript"],
  },
  {
    title: "Autonomyo",
    description:
      "Creating an Adaptive Neuromuscular Controller for an Assistive Lower-Limb Exoskeleton",
    videoPath: neuroMuscularVideo,
    tags: ["Robotics", "Python", "CMA-ES"],
  },
  {
    title: "SolSponsor",
    description: "Patreon-like platform with on-chain transactions and NFTS",
    videoPath: solsponsorVideo,
    tags: ["Full-stack", "React", "Typescript"],
  },
  {
    title: "VR Interactions",
    description: "Improving User Interactions in VR Productivity Environments",
    videoPath: multimodalVRVideo,
    tags: ["VR", "UX", "C#"],
  },
  {
    title: "Egg Sorter",
    description:
      "Deep Learning Framework for Miniature Biological Entities Classification",
    videoPath: eggSorterVideo,
    tags: ["Deep Learning", "Computer Vision", "Python"],
  },

  {
    title: "Referral Platform",
    description: "Web3 marketing platform and referral system",
    videoPath: qwestiveRefVideo,
    tags: ["Full-stack", "React", "Typescript"],
  },
  /* {
    title: "Web3 Q&A",
    description:
      "On-chain question bidding platform with refunds upon expiration.",
    videoPath: qwestiveQAVideo,
    tags: ["Full-stack", "React", "Typescript"],
  }, */
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
          playsInline
          onClick={(e) => {
            e.currentTarget.controls = true;
          }}
          className=" sm:w-3/5"
        ></video>
        <div>
          <h2 className="text-xl font-bold leading-tight text-zinc-200">
            {project.title}
          </h2>
          <p className="mt-2">{project.description}</p>
          <TagsCloud skills={project.tags} />
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
        <h2 className="eyebrow">Some Projects</h2>
      </FadeIn>
      <div className="mt-5 space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
