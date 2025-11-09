"use client";

import { useState } from "react";
import Aurora from "@/components/Aurora";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";

import GithubContributionsCard from "./GithubContributionsCard";
import TechExpertise from "./TechExpertise";
import GoogleMapsLocation from "./GoogleMapsLocation";

import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiX,
  SiGmail,
} from "react-icons/si";
import { Titan_One } from "next/font/google";

export default function Home() {
  const [nameDone, setNameDone] = useState(false);
  const [titleDone, setTitleDone] = useState(false);
  const [paragraphDone, setParagraphDone] = useState(false);
  const [paragraph2Done, setParagraph2Done] = useState(false);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-6">
        {/* Aurora Background */}
        <div className="absolute inset-0 h-[50vh] z-0">
          <Aurora
            colorStops={["#cf0f47", "#ffdede", "#ff0b55"]}
            blend={1}
            amplitude={0.7}
            speed={0.6}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl space-y-6">
          {/* Availability muncul setelah nama selesai */}
          {nameDone && (
            <div
              className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in"
              style={{
                animation: "fadeIn 0.8s ease-in-out forwards",
                animationDelay: "0.1s",
              }}
            >
              <a
                href="mailto:gibranramadhannnn@gmail.com"
                className="flex items-center px-3 py-1 text-xs lg:text-sm font-semibold font-mono border rounded-full shadow-inner bg-folly/50 border-folly"
              >
                <span className="w-2 h-2 lg:w-3 lg:h-3 mr-2 rounded-full bg-green-400"></span>
                Available for projects
              </a>
            </div>
          )}

          {/* === Biography === */}
          <div className="flex flex-col items-center justify-center w-fit">
            {/* Name */}
            <div className="mb-0 opacity-0 animate-fade-in-slow">
              <SplitText
                text="M Gibran Ramadhan."
                className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center"
                delay={80}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={() => setNameDone(true)}
              />
            </div>

            {/* Job title (after name) */}
            {nameDone && (
              <BlurText
                text="I'm a software engineer."
                delay={90}
                animateBy="words"
                direction="bottom"
                onAnimationComplete={() => setTitleDone(true)}
                className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center"
              />
            )}

            {/* Paragraph */}
            <div className="flex flex-col items-center justify-center gap-0.5 mt-4">
              {titleDone && (
                <BlurText
                  text="Highly proficient Software Engineer"
                  delay={90}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={() => setParagraphDone(true)}
                  className="text-sm sm:text-md lg:text-lg font-mono text-center"
                />
              )}
              {paragraphDone && (
                <BlurText
                  text="specializing in solving complex problems"
                  delay={90}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={() => setParagraph2Done(true)}
                  className="text-sm sm:text-md lg:text-lg font-mono text-center"
                />
              )}
              {paragraphDone && (
                <BlurText
                  text="and delivering robust solutions."
                  delay={90}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={() => setParagraph2Done(true)}
                  className="text-sm sm:text-md lg:text-lg font-mono text-center"
                />
              )}
            </div>
          </div>

          {/* === Social Links & Tech Expertise (after paragraph) === */}
          {titleDone && (
            <div
              className="opacity-0 animate-fade-in"
              style={{
                animation: "fadeIn 1s ease-in-out forwards",
                animationDelay: "0.2s",
              }}
            >
              {/* Social Links */}
              <div className="flex justify-center space-x-1 sm:space-x-2 lg:space-x-3 mt-4">
                {[
                  {
                    Icon: SiGithub,
                    href: "https://github.com/GibranRamadhannn",
                  },
                  {
                    Icon: SiLinkedin,
                    href: "https://www.linkedin.com/in/m-gibran-r-553281225/?skipRedirect=true",
                  },
                  {
                    Icon: SiInstagram,
                    href: "https://www.instagram.com/mhd.gbrnrmdhn/",
                  },
                  { Icon: SiX, href: "https://x.com/rawrbutmeowtoo" },
                  { Icon: SiGmail, href: "mailto:gibranramadhannnn@gmail.com" },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <Icon className="w-4 sm:w-5 md:w-6 lg:w-7 h-auto" />
                  </a>
                ))}
              </div>
              {/* Tech Expertise */}
              <TechExpertise />
            </div>
          )}
        </div>
      </section>

      {/* ===== BENTO SECTION ===== */}
      {/* <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-6">
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-4 mx-auto">
          <GithubContributionsCard />
          <GoogleMapsLocation />
        </div>
      </section> */}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInSlow {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out forwards;
        }

        .animate-fade-in-slow {
          animation: fadeInSlow 0.8s ease-in forwards;
          animation-delay: 0.1s;
        }
      `}</style>
    </>
  );
}
