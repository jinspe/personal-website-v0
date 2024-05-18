import { FadeIn } from "./Effects/FadeIn";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-full lg:pt-10">
      <FadeIn>
        <p className="text-base text-zinc-400">
          I&apos;m [ʒɑ̃], a software engineer with a master&apos;s in robotics
          based where the internet takes me. I&apos;m into computer vision,
          machine learning, and full-stack web development. Trying to build cool
          stuff and learn new things.
        </p>
      </FadeIn>
    </div>
  );
}
