import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// TODO: drop in your real profile URLs / email below
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/thakurshaurya", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaurya-thakur-880912327/", icon: FaLinkedinIn },
  { label: "X (Twitter)", href: "https://x.com/", icon: FaXTwitter },
  { label: "Instagram", href: "https://instagram.com/_.shaurya7._", icon: FaInstagram },
  { label: "Discord", href: "https://discord.com/", icon: FaDiscord },
  { label: "Email", href: "mailto:thakurshaurya2007@gmail.com", icon: MdEmail },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-cyber-bg/80 backdrop-blur-md">
      {/* top neon accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyber-pink to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-10 sm:px-8 md:flex-row md:justify-between">
        {/* Brand + blurb — TODO: personalize */}
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold tracking-widest text-white">
            PORTFOLIO<span className="text-cyber-cyan">.</span>
          </p>
          <p className="mt-1 max-w-xs text-sm text-cyber-muted">
            Building the future, one line of code at a time.
          </p>
        </div>

        {/* Social icons */}
        <nav aria-label="Social links" className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="social-link"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs tracking-wider text-cyber-muted">
        © {new Date().getFullYear()} — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
