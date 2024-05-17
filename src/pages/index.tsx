import Head from "next/head";
import ContactFormSection from "~/components/ContactFormSection";
import HeroSection, { ProfileLinks } from "~/components/HeroSection";
import ExperienceSection from "~/components/ExperienceSection";
import { FadeIn } from "~/components/Effects/FadeIn";
import Layout from "~/components/Layout";
import ProfileSection from "~/components/ProfileSection";
import ProjectSection from "~/components/ProjectSection";
import SideNavbar from "~/components/SideNavbar";

const title = "Jean Duquenne";
const description = "Jean Duquenne | Software Engineer";
const websiteUrl = "https://jeanduquenne.com";
const ogImage = "/og-image.png";
const keywords =
  "Jean Duquenne, web development, software engineering, computer vision, machine learning, full-stack web development, software engineer, web3 developer";

/*
 TODO : Add images and gifs to the experience cards and projects
 TODO : Add a projects
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
      <Layout>
        {/* <div className="mt-14 sm:mt-20 md:mt-32">
          <HeroSection />
        </div> */}
        <div className="relative justify-between gap-20 lg:flex">
          <div className="mt-4 sm:mt-12 md:mt-16 lg:mt-0 lg:min-w-[33%]">
            <div className="flex lg:sticky lg:top-0 lg:min-h-screen lg:flex-col ">
              <div className="flex grow flex-col justify-between pt-10 lg:pb-10">
                <div>
                  <ProfileSection />
                  <SideNavbar />
                </div>
                <div className=" mx-auto mt-6 hidden w-full max-w-2xl lg:block ">
                  <FadeIn viewportAlt="once">
                    <ProfileLinks />
                  </FadeIn>
                  <div />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-20 pt-10 lg:pb-16">
            <HeroSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactFormSection />
          </div>
        </div>
      </Layout>
    </>
  );
}
