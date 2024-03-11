const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mb-px ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function LinkWithArrow({
  href,
  title,
  prevTitle,
  fullContainer,
}: {
  href: string;
  title: string;
  prevTitle?: string;
  fullContainer?: boolean;
}) {
  return (
    <a
      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-zinc-200  hover:text-cyan-300 focus-visible:text-cyan-300"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${prevTitle && `${prevTitle}, `}${title} (opens in a new tab)`}
      title={title}
    >
      {fullContainer && (
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 md:block"></span>
      )}
      <span>
        {prevTitle && `${prevTitle} at `}
        <span className="inline-block">
          {title}
          <Arrow />
        </span>
      </span>
    </a>
  );
}
