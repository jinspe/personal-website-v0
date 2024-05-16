import { neuroMuscularVideo } from "~/assets";

interface Project {
  title: string;
  description: string;
  link: string;
  videoPath: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex gap-5">
      <video
        src={project.videoPath}
        autoPlay
        loop
        muted
        controls
        className=" w-1/2"
      ></video>
      <div>
        <h2 className="text-lg font-medium leading-tight text-zinc-200">
          {project.title}
        </h2>
        <p>{project.description}</p>
        <a href={project.link}>View Project</a>
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    title: "Project 1",
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
  return (
    <div className=" space-y-20">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
