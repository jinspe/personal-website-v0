import Link from "next/link";
import { GitHubIcon, LinkedInIcon, profilePic } from "~/assets";
import clsx from "clsx";
import Image from "next/image";
import LinkWithArrow from "./LinkWithArrow";
import { FadeIn, FadeSide } from "./Effects/FadeIn";

const GITHUB_PROFILE = "https://github.com/jinspe";
const LINKEDIN_PROFILE = "https://linkedin.com/in/jean-duquenne";
const RESUME_LINK = "/jean-duquenne-resume.pdf";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300" />
    </Link>
  );
}

function Avatar({
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & object) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={profilePic}
        alt="Jean Duquenne 8bit avatar"
        width={64}
        height={64}
        className="h-16 w-16 rounded-full bg-zinc-800 object-cover sm:h-20 sm:w-20"
        priority
      />
    </Link>
  );
}

export function ProfileLinks() {
  return (
    <div className="flex items-center gap-6">
      <SocialLink
        title="Follow on GitHub"
        href={GITHUB_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        title="Follow on LinkedIn"
        href={LINKEDIN_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
      <LinkWithArrow href={RESUME_LINK} title="Résumé" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl pt-12">
      {/*  <FadeSide side="left">
        <div className=" flex flex-wrap gap-4 sm:gap-8">
          <div className="relative flex-shrink-0">
            <Avatar />
          </div>
        
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
              <Link href="/">Jean Duquenne</Link>
            </h1>
            <h2 className="mt-1 text-lg font-medium tracking-tight text-zinc-200 sm:mt-3 sm:text-xl">
              Software Engineer
            </h2>
          </div>
        </div>
      </FadeSide> */}

      <FadeIn>
        <p className="mb-6 mt-5 text-base text-zinc-400">
          I&apos;m [ʒɑ̃], a software engineer with a master&apos;s in robotics
          based where the internet takes me. I&apos;m into computer vision,
          machine learning, and full-stack web development. Trying to build cool
          stuff and learn new things.
        </p>
        {/* <ProfileLinks /> */}
      </FadeIn>
    </div>
  );
}
