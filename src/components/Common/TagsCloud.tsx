export default function TagsCloud({ skills }: { skills: string[] }) {
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
