***

# 🚀 Wally Dev Lab | Full-Stack Portfolio

A modern, high-performance portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for developers who value clean code, automation, and a professional user experience.

**🔗 Live Demo:** [https://wally-dev-lab.vercel.app/](https://wally-dev-lab.vercel.app/)

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 14](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Animations/Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
*   **Forms:** [Formspree](https://formspree.io/)
*   **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ Key Features

### 1. 📄 CV Download System
A professional "Download CV" button is integrated into the Hero section. 
*   **How it works:** The PDF is served directly from the `/public` directory.
*   **Safety:** Uses the HTML5 `download` attribute to ensure a seamless download experience.

### 2. 📧 Serverless Contact Form
Uses **Formspree** for backend-less email handling.
*   Messages are delivered directly to your inbox.
*   Built with `shadcn/ui` form components for a polished look.

### 3. 🎡 Featured Projects Carousel
Interactive project gallery that keeps the UI clean.
*   **Responsive:** Shows 2 projects on desktop and 1 on mobile.
*   **Touch Optimized:** Supports swipe gestures on smartphones.

### 4. 🌙 Adaptive Theming
Full support for Dark and Light modes.
*   **System Detection:** Automatically respects the user's OS theme.
*   **Dynamic Icons:** Navbar logos and tech icons swap color/files based on the active theme.

### 5. 📱 Advanced Mobile Navigation
Custom "Burger Menu" using the shadcn `Sheet` component.
*   Centered full-screen overlay for better thumb-reach.
*   Auto-closing logic when a navigation link is clicked.

---

## ⚙️ Automation Scripts (DevOps)

I have built a custom suite of automation scripts to ensure a consistent experience across different operating systems:

### Linux (Pop!_OS / Ubuntu) & macOS
*   `install-deps.sh`: Installs all core, UI, and icon dependencies in one click.
*   `deploy.sh`: A pre-deployment pipeline that runs linting, type-checking, and build tests before pushing to GitHub.

### Windows
*   `install-deps.ps1`: PowerShell equivalent for environment setup.
*   `deploy.ps1`: PowerShell pipeline for safe deployments.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

**On Linux (Pop!_OS) / macOS:**
```bash
chmod +x *.sh
./install-deps.sh
```

**On Windows (PowerShell):**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
.\install-deps.ps1
```

### 3. Configuration
To personalize the portfolio, update the following:
*   **CV:** Place your resume in `public/Profile.pdf`.
*   **Formspree:** Update the form `action` URL in `src/app/page.tsx` with your unique Formspree ID.
*   **Images:** Place your profile photo in `public/image/portfolio-profile.jpg`.
*   **Logos:** Add `logo-black.png` and `logo-white.png` to the `public/` folder for theme-switching.

---

## 🛠️ Development & Deployment

### Run Local Server
```bash
npm run dev
```

### Safe Deployment
To push changes to production safely (this runs the `build-check` script to catch errors before they reach Vercel):

**On Linux:**
```bash
./deploy.sh
```

**On Windows:**
```powershell
.\deploy.ps1
```

### The `build-check` Script
The automated deployment process runs the following command:
`npm run lint && tsc --noEmit && npm run build`
*   **Lint:** Checks for syntax and styling errors.
*   **Type Check:** Ensures 100% TypeScript type safety.
*   **Build:** Verifies that the Next.js production build succeeds.

---

## 📸 Metadata & SEO
Optimized for search engines and social media:
*   **Metadata API:** Configured for high-ranking SEO titles and descriptions.
*   **OpenGraph:** Pre-configured for rich link previews on LinkedIn, Twitter, and Discord.
*   **Favicon:** Custom branding integrated via `src/app/icon.png`.

---

**Author:** Katlego Barayi  
**License:** [MIT](LICENSE)