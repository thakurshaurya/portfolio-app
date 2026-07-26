"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "README File Generator",
    description:
      "Generate beautiful GitHub README files effortlessly with customizable templates and live preview.",
    weblink: "https://readme-file-generator.vercel.app/",
    gitlink: "https://github.com/thakurshaurya/readme-file-generator",
    image: "/images/Readmeapp.png",
  },
  {
    name: "AI ChatBot",
    description:
      "A modern AI chatbot built with React, Node.js and AI APIs featuring an elegant conversational interface.",
    weblink: "https://chatbotfrontend-sn6p.onrender.com/",
    gitlink: "https://github.com/thakurshaurya/ChatBot",
    image: "/images/Chatbot.png",
  },
  {
    name: "E-Commerce Website",
    description:
      "Responsive e-commerce frontend with modern UI, product listings, shopping cart and animations.",
    weblink: "https://thakurshaurya.github.io/E-Commerce-web-clone/",
    gitlink: "https://github.com/thakurshaurya/E-Commerce-web-clone",
    image: "/images/Ecommerce.png",
  },
  {
    name: "Finance App",
    description:
      "Track expenses and manage finances with an intuitive dashboard and responsive interface.",
    weblink: "https://vibecoding-app-delta.vercel.app/",
    gitlink: "https://github.com/thakurshaurya/FinanceApp",
    image: "/images/Financeapp.png",
  },
];

const Worktxt = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      <style jsx>{`
        @keyframes blob-drift-left {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(80px, -50px, 0); }
        }
        @keyframes blob-drift-right {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50%      { transform: translate3d(-80px, 60px, 0); }
        }
        .blob-left {
          animation: blob-drift-left 12s ease-in-out infinite;
          will-change: transform;
        }
        .blob-right {
          animation: blob-drift-right 14s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      <div className="blob-left absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 " />
      <div className="blob-right absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 " />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="font-display text-5xl font-black md:text-6xl">
            Featured{" "}
            <span className="text-gradient-cyber">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A collection of projects showcasing my skills in frontend,
            backend, full-stack development and modern UI design.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-cyber-bg-soft/70 transition-transform duration-300 ease-out hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1200}
                  height={700}
                  className="h-[280px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              </div>

              <div className="relative p-8">
                <h3 className="text-3xl font-bold text-white">
                  {project.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.weblink}
                    target="_blank"
                    className="flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-cyan-400 active:scale-95"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.gitlink}
                    target="_blank"
                    className="flex items-center gap-3 rounded-xl border border-cyan-500/30 px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/10 active:scale-95"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2),inset_0_0_20px_rgba(34,211,238,0.08)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worktxt;