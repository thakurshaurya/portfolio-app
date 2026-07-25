"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

type FormStatus = "idle" | "sending" | "sent" | "error";

const Contacttxt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ── Client-side validation ──
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* ================= Background ================= */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-10 h-96 w-96 rounded-full bg-cyan-500/10 "
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 90,
          }}
          className="text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-5xl font-black md:text-6xl">
            Contact{" "}
            <span className="text-gradient-cyber">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 leading-8">
            Have an idea, project, or opportunity? Feel free to
            reach out. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* ================= Contact Cards ================= */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Email */}

          <motion.a
            href="mailto:thakurshaurya2007@gmail.com"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{
              duration: .6,
              type: "spring",
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-cyber-bg-soft/70 p-8 backdrop-blur-xl"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative flex items-center gap-6">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400">

                <FaEnvelope size={34} />

              </div>

              <div>

                <p className="text-sm uppercase tracking-widest text-cyan-400">
                  Email
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white break-all">
                  thakurshaurya2007@gmail.com
                </h3>

              </div>

            </div>

          </motion.a>

          {/* Phone */}

          <motion.a
            href="tel:+919911755766"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{
              duration: .6,
              type: "spring",
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-cyber-bg-soft/70 p-8 backdrop-blur-xl"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative flex items-center gap-6">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400">

                <FaPhoneAlt size={30} />

              </div>

              <div>

                <p className="text-sm uppercase tracking-widest text-cyan-400">
                  Phone
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  +91 9911755766
                </h3>

              </div>

            </div>

          </motion.a>

        </div>

        {/* ================= Contact Form ================= */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: .7,
          }}
          className="mt-16 space-y-8"
        >

          <input
            id="contact-name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            disabled={status === "sending"}
            className="w-full rounded-2xl border border-cyan-500/20 bg-cyber-bg-soft/70 px-6 py-5 text-lg text-white outline-none backdrop-blur-xl transition focus:border-cyan-400 disabled:opacity-50"
          />

          <input
            id="contact-email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            disabled={status === "sending"}
            className="w-full rounded-2xl border border-cyan-500/20 bg-cyber-bg-soft/70 px-6 py-5 text-lg text-white outline-none backdrop-blur-xl transition focus:border-cyan-400 disabled:opacity-50"
          />

          <textarea
            id="contact-message"
            rows={8}
            placeholder="Your Message"
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            disabled={status === "sending"}
            className="w-full resize-none rounded-2xl border border-cyan-500/20 bg-cyber-bg-soft/70 px-6 py-5 text-lg text-white outline-none backdrop-blur-xl transition focus:border-cyan-400 disabled:opacity-50"
          />

          {/* ── Status toast ── */}
          <AnimatePresence mode="wait">
            {status === "sent" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-emerald-400"
              >
                <FaCheck />
                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-4 text-red-400"
              >
                <FaExclamationTriangle />
                <span>{errorMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            id="contact-submit"
            type="submit"
            disabled={status === "sending"}
            whileHover={status !== "sending" ? {
              scale: 1.05,
              y: -4,
            } : {}}
            whileTap={status !== "sending" ? {
              scale: 0.96,
            } : {}}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
            className="group relative mx-auto flex items-center gap-3 overflow-hidden rounded-2xl bg-cyan-400 px-10 py-5 text-lg font-semibold text-black transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {/* Hover Glow */}
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative">
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Sent!"
                  : "Send Message"}
            </span>

            <motion.span
              className="relative"
              animate={
                status === "sending"
                  ? { rotate: [0, 360] }
                  : { x: [0, 4, 0] }
              }
              transition={
                status === "sending"
                  ? { repeat: Infinity, duration: 0.8, ease: "linear" }
                  : { repeat: Infinity, duration: 1.6, ease: "easeInOut" }
              }
            >
              {status === "sent" ? <FaCheck /> : <FaPaperPlane />}
            </motion.span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}


export default Contacttxt;
