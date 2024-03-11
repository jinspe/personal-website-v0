import Head from "next/head";
import ContactFormSection from "~/components/ContactFormSection";
import { Navbar } from "~/components/Navbar";
import HeroSection, { ProfileLinks } from "~/components/HeroSection";
import ExperienceSection from "~/components/ExperienceSection";
import PageSpotlight from "~/components/Effects/PageSpotlight";
import { FadeIn } from "~/components/Effects/FadeIn";

const title = "Jean Duquenne";
const description = "Jean Duquenne | Software Engineer";
const websiteUrl = "https://jeanduquenne.com";
const ogImage = "/og-jd.png";
const keywords =
  "Jean Duquenne, web development, software engineering, computer vision, machine learning, full-stack web development, software engineer, web3 developer";

/*
 FIXME: contact form section looks a bit empty, can play with using sticky with 2 col layout or adding some images or gifs
 TODO : Add images and gifs to the experience cards and projects
 TODO : Create blog post like pages for the experiences and projects
*/

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={title} />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={websiteUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />
      </Head>
      <>
        <main
          className="mx-auto max-w-screen-xl px-6 pb-24 lg:px-12 lg:pb-0"
          id="about"
        >
          <Navbar />
          <PageSpotlight />
          <div className="mt-14 sm:mt-20 md:mt-32">
            <HeroSection />
          </div>

          <div className="relative mt-4 justify-between gap-10 sm:mt-12 md:mt-16 lg:flex">
            <div className="pt-10 lg:pb-16">
              <ExperienceSection />
            </div>

            <div className="mt-4 sm:mt-12 md:mt-16 lg:mt-0 lg:min-w-[33%]">
              <div className=" flex lg:sticky lg:top-0 lg:min-h-screen lg:flex-col ">
                <div className="flex grow flex-col justify-between pt-10 lg:pb-16">
                  <ContactFormSection />
                  <div className="mt-6 hidden pl-4 lg:block">
                    <FadeIn viewportAlt="once">
                      <ProfileLinks />
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
}
