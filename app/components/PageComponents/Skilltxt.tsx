"use client";

import { motion } from "motion/react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiFramer,
  SiPostman,
  SiPrisma,
  SiLinux,
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// TODO: check this list and remove anything you don't actually know
const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
  // { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#83CD6D" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  // { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  // { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  // { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  // { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  // { name: "Docker", icon: SiDocker, color: "#2496ED" },
  // { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Java", icon: FaJava, color: "#F89820" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#FFD43B" },
  // { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
];

const half = Math.ceil(skills.length / 2);
const rowA = skills.slice(0, half);
const rowB = skills.slice(half).reverse();

type Skill = (typeof skills)[number];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  return (
    <div
      className="skill-card "
      style={{ "--skill-color": skill.color } as React.CSSProperties}
    >
      <Icon className="skill-card__icon" size={44} color={skill.color} />
      <span className="skill-card__name">{skill.name}</span>
    </div>
  );
};

const MarqueeRow = ({
  items,
  reverse,
  duration,
}: {
  items: Skill[];
  reverse?: boolean;
  duration: number;
}) => (
  <div
    className={`skill-marquee-row${reverse ? " skill-marquee-row--reverse" : ""}`}
    style={{ "--duration": `${duration}s` } as React.CSSProperties}
  >
    {[...items, ...items].map((skill, i) => (
      <SkillCard key={`${skill.name}-${i}`} skill={skill} />
    ))}
  </div>
);

const Skilltxt = () => {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 " />
      <div className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 " />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            Technologies
          </p>
          <h2 className="font-display text-5xl font-black md:text-6xl">
            My <span className="text-gradient-cyber">Tech Stack</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Technologies and tools I use to design, develop and deploy modern,
            scalable web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="skill-marquee-wrap py-10"
        >
          <MarqueeRow items={rowA} duration={34} />
          <MarqueeRow items={rowB} duration={40} reverse />
        </motion.div>
      </div>
    </section>
  );
};

export default Skilltxt;
