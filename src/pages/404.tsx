import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-6 lg:px-12">
      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <p className="font-display text-4xl font-semibold text-zinc-200 sm:text-5xl">
          404
        </p>
        <h1 className="font-display text-center text-2xl font-semibold text-zinc-200">
          Page not found
        </h1>
        <p className="text-center text-sm text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-200 transition hover:text-cyan-300"
        >
          Go to the home page &rarr;
        </Link>
      </div>
    </div>
  );
}
