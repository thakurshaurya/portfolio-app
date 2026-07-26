"use client";

import { motion } from "motion/react";
import {
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodingninjas,
  SiGeeksforgeeks,
} from "react-icons/si";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/thakurshaurya",
    icon: FaGithubSquare,
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thakur-shaurya/",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/thakurshaurya/",
    icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    label: "Coding Ninjas",
    href: "https://www.naukri.com/code360/profile/45ad6f2b-3b15-47ba-8912-1fca038edb3d",
    icon: SiCodingninjas,
    color: "#DD6620",
  },
  {
    label: "GeeksForGeeks",
    href: "https://www.geeksforgeeks.org/profile/thakurshaurya",
    icon: SiGeeksforgeeks,
    color: "#1f7d25",
  },
];

const Abouttxt = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >

      <section className="relative overflow-hidden px-6 py-28">
        {/* Background Glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-blue-500/10"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="text-center"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
              Let's Connect
            </p>

            <h2 className="font-display text-5xl font-black md:text-6xl">
              Connect <span className="text-gradient-cyber">With Me</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Whether you want to collaborate, discuss ideas, or just say hello,
              I'd love to hear from you. Feel free to connect with me on any of
              the platforms below.
            </p>
          </motion.div>

          {/* Social Cards */}
          <div className="mt-20 flex flex-wrap justify-center gap-6">
            {SOCIALS.map(({ label, href, icon: Icon, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 160,
                }}
                whileHover={{ y: -12, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-40 shrink-0 grow-0 basis-40 overflow-hidden rounded-3xl border border-cyan-500/20 bg-cyber-bg-soft/70 p-8 backdrop-blur-xl sm:w-44 sm:basis-44"
              >
                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent"
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border border-transparent"
                  whileHover={{
                    borderColor: "rgba(34,211,238,.55)",
                    boxShadow:
                      "0 0 35px rgba(34,211,238,.25), inset 0 0 20px rgba(34,211,238,.08)",
                  }}
                  transition={{ duration: 0.35 }}
                />

                <div className="relative flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    <Icon className="h-16 w-16" style={{ color }} />
                  </motion.div>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {label}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">Visit Profile</p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 h-[2px] rounded-full bg-cyan-400"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Abouttxt;
