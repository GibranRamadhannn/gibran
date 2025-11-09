"use client";

import LogoLoop from "@/components/LogoLoop";
import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiMysql,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com/" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com/",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function TechExpertise() {
  return (
    <div className="w-full max-w-3xl mt-8">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        ariaLabel="Technology Expertises"
      />
    </div>
  );
}
