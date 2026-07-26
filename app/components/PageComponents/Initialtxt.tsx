"use client";

import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

const Initialtxt = () => {
  return (
    <section className="flex min-h-[90vh] items-center justify-center px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold tracking-widest text-cyan-300">
            👋 Hi, I'm <span className="text-white">Shaurya Thakur</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-black leading-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-white">
            Building Modern
          </span>

          <br />

          <span className="text-gradient-cyber">
            Web Experiences
          </span>

          <br />

          <span className="text-white">
            One Project At A Time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl"
        >
          I'm a{" "}
          <span className="font-semibold text-cyan-300">
            B.Tech Computer Science Student
          </span>{" "}
          passionate about{" "}
          <span className="font-semibold text-cyan-300">
            Full Stack Development
          </span>
          , solving real-world problems, and building modern web applications.
          I enjoy turning ideas into polished digital experiences while
          continuously improving my skills through projects and DSA.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-btn flex items-center gap-3 px-8 py-4 text-lg"
          >
            Download CV
            <FaExternalLinkAlt />
          </a>

          <Link
            href="#work"
            className="rounded-xl border border-cyan-400/40 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            View Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-20 flex flex-wrap justify-center gap-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-gradient-cyber">15+</h2>
            <p className="mt-2 text-gray-400">Projects Built</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gradient-cyber">300+</h2>
            <p className="mt-2 text-gray-400">DSA Problems</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gradient-cyber">∞</h2>
            <p className="mt-2 text-gray-400">Learning Never Stops</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Initialtxt;