"use client"
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react"
const initialtxt = () => {
    return (
        <>
            <motion.div
                initial={{ x: -250, opacity: 0,  }}
                animate={{ x: 0, opacity: 1,  }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="mx-auto max-w-3xl">
                {/* Eyebrow */}
                <p className="font-display mb-6 inline-block border border-cyber-cyan/40 bg-cyber-cyan/5 px-4 py-1.5 text-xs tracking-[0.3em] text-cyber-cyan">
                    👋🏻 Hi!,<span className="text-gradient-cyber">I'm Shaurya Thakur</span> 
                </p>

                {/* Headline */}
                <h1 className="font-display text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                    <span className="text-white">I Know That Every Skill</span>{" "}
                    <span className="text-gradient-cyber">We Acquire,
                        Doubles Our Odds Of</span>{" "}
                    <span className="neon-text text-white">Success.</span>
                </h1>

                {/* Sub copy */}
                {/* <p className="mx-auto mt-6 max-w-xl text-lg border-cyber-cyan/40 bg-cyber-cyan/5 px-4 py-1.5 tracking-[0.3em] text-cyber-cyan">
                    I am a B-tech Computer Science student and have keen interest in website
                    building. 
                </p> */}

                {/* CTAs */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                    <div
                        onClick={() => window.open("/resume.pdf")}
                        className="cyber-btn">
                        View CV
                        <FaExternalLinkAlt />
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default initialtxt