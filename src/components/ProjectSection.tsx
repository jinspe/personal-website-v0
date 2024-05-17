import { neuroMuscularVideo } from "~/assets";
import { FadeIn } from "./Effects/FadeIn";
import { useSectionContext } from "./SectionContext";

interface Project {
  title: string;
  description: string;
  link: string;
  videoPath: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn>
      <div className=" flex  gap-5">
        <video
          src={project.videoPath}
          autoPlay
          loop
          muted
          controls
          className=" w-3/5"
        ></video>
        <div>
          <h2 className="text-lg font-medium leading-tight text-zinc-200">
            {project.title}
          </h2>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      </div>
    </FadeIn>
  );
}

const projects: Project[] = [
  {
    title:
      "Creating an Adaptive Neuromuscular Controller for an Assistive Lower-Limb Exoskeleton",
    description: "This is a description of project 1",
    link: "https://example.com",
    videoPath: neuroMuscularVideo,
  },
  {
    title: "Project 2",
    description: "This is a description of project 2",
    link: "https://example.com",
    videoPath: neuroMuscularVideo,
  },
  {
    title: "Project 3",
    description: "This is a description of project 3",
    link: "https://example.com",
    videoPath: neuroMuscularVideo,
  },
];

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
