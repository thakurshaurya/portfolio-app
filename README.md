# Cyberpunk Portfolio App 🚀

[![Live Demo](https://img.shields.io/badge/Live%20Demo-portfolio--app--eta--gules.vercel.app-05d9e8?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-app-eta-gules.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. Styled with a **Cyberpunk: Edgerunners** visual aesthetic featuring David Martinez jacket–inspired neon gradient interactions, cursor-reactive parallax backgrounds, smooth motion animations, and an integrated contact form powered by Resend.

🌐 **Deployment Link**: [https://portfolio-app-eta-gules.vercel.app/](https://portfolio-app-eta-gules.vercel.app/)

---

## ✨ Features

- ⚡ **Cyberpunk: Edgerunners Theme**: Striking neon color palette (`cyber-yellow`, `cyber-cyan`, `cyber-pink`, `cyber-orange`) with angular chamfered edges and glowing gradient hover sweeps.
- 🖱️ **Interactive Cursor-Reactive Background**: Frame-budgeted (RAF) smooth parallax grid shift, ambient drifting neon blobs, and dynamic cursor spotlight tracking.
- 📱 **Fully Responsive Layout**: Mobile-ready navigation bar with smooth scrolling to sections (`#`, `#about`, `#skill`, `#work`, `#contact`).
- 🛠️ **Skills Showcase**: Visually dynamic tech stack grid showcasing frontend, backend, databases, and tools.
- 💼 **Featured Projects Grid**: Detailed project cards with live links, repository links, tech tags, and neon glowing borders.
- 📬 **Working Contact Form**: Seamless email submission powered by Next.js Server Side API route (`/api/contact`) and **Resend**.
- 🅰️ **Modern Typography**: Custom Google Fonts (**Orbitron** for futuristic headlines and **Rajdhani** for sleek body copy).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Animations**: [React 19](https://react.dev/), [Motion](https://motion.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Typography**: `@next/font` (Orbitron, Rajdhani)
- **Email Delivery**: [Resend](https://resend.com/)
- **Deployment Platform**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
portfolio-app/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Resend email API endpoint
│   ├── components/
│   │   ├── PageComponents/
│   │   │   ├── Initialtxt.tsx    # Hero / Landing Section
│   │   │   ├── Abouttxt.tsx      # About Me Section
│   │   │   ├── Skilltxt.tsx      # Skills & Technologies Section
│   │   │   ├── Worktxt.tsx       # Projects & Portfolio Showcase
│   │   │   └── Contacttxt.tsx    # Interactive Contact Form Section
│   │   ├── Footer.tsx            # Site-wide Footer with Social Links
│   │   ├── Header.tsx            # Navigation Bar with Mobile Drawer
│   │   └── InteractiveBackground.tsx # Cursor-following Parallax Glow
│   ├── favicon.ico
│   ├── globals.css               # Cyberpunk color tokens & custom CSS utilities
│   ├── layout.tsx                # App Root Layout with fonts & global wrapper
│   └── page.tsx                  # Single-page smooth scroll orchestration
├── public/                       # Static images & project assets
├── .env.local                    # Environment variables (Resend API key)
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js 18.x** or later installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thakurshaurya/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application locally.

---

## ⚙️ Building & Deployment

### Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

### Deployed Site

The website is continuously deployed on **Vercel**:
🔗 **[https://portfolio-app-eta-gules.vercel.app/](https://portfolio-app-eta-gules.vercel.app/)**

---

## 🎨 Customization

To adapt this portfolio for your own usage:
- **Personal Details & Social Links**: Update links in [`app/components/Footer.tsx`](file:///Users/thakurshaurya/Documents/Github/portfolio-app/app/components/Footer.tsx) and text in [`app/components/PageComponents/`](file:///Users/thakurshaurya/Documents/Github/portfolio-app/app/components/PageComponents).
- **Projects**: Modify the project listings in [`app/components/PageComponents/Worktxt.tsx`](file:///Users/thakurshaurya/Documents/Github/portfolio-app/app/components/PageComponents/Worktxt.tsx).
- **Email Recipient**: Set your target notification email address inside [`app/api/contact/route.ts`](file:///Users/thakurshaurya/Documents/Github/portfolio-app/app/api/contact/route.ts).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
