"use client"
import { motion } from "motion/react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";

const Abouttxt = () => {
  const SOCIALS = [
    { label: "GitHub", href: "https://github.com/thakurshaurya", icon: FaGithubSquare },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shaurya-thakur-880912327/", icon: FaLinkedin },
    { label: "Leetcode", href: "https://leetcode.com/u/thakurshaurya/", icon: SiLeetcode },
    { label: "CodingNinja", href: "https://www.naukri.com/code360/profile/45ad6f2b-3b15-47ba-8912-1fca038edb3d", icon: SiCodingninjas },


  ];
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeIn"
        }}
      >

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn"
          }}
          className="flex text-5xl gap-8"
        >
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="cyber-btn w-28 h-28"
            >
              <Icon className="w-12 h-12" aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </motion.div>

    </>
  )
}

export default Abouttxt