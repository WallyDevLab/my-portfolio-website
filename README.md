# 🚀 Wally Dev Lab | Full-Stack Portfolio

A modern, high-performance portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for developers who value clean code, automation, and a professional user experience.

**🔗 Live Demo:** [https://wally-dev-lab.vercel.app/](https://wally-dev-lab.vercel.app/)

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 14](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Database:** [Prisma Postgres](https://www.prisma.io/postgres) (Managed SQL)
*   **ORM:** [Prisma 7](https://www.prisma.io/)
*   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Animations/Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
*   **Forms:** [Formspree](https://formspree.io/)
*   **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ Key Features

### 1. 📄 CV Download System
A professional "Download CV" button is integrated into the Hero section. The PDF is served directly from the `/public` directory using the HTML5 `download` attribute for a seamless experience.

### 2. 📧 Serverless Contact Form
Uses **Formspree** for backend-less email handling. Messages are delivered directly to your inbox, utilizing polished `shadcn/ui` form components.

### 3. 🎡 Featured Projects Carousel
Interactive project gallery built with Embla Carousel. It is fully responsive, showing 2 projects on desktop and 1 on mobile with touch-swipe support.

### 4. 💬 Full-Stack Testimonials (Wall of Love)
A dedicated `/testimonials` page that allows mentors, mentees, and colleagues to leave feedback.
*   **Database Integrated:** Powered by Prisma Postgres.
*   **Categorized:** Automatically groups feedback into Mentors, Mentees, and Colleagues.
*   **Pop-out Modals:** Uses shadcn `Dialog` for reading long-form testimonials.
*   **Spam Prevention:** Server-side logic and database-level `@unique` constraints prevent duplicate submissions from the same email.

### 5. 🌙 Adaptive Theming
Full support for Dark and Light modes. Automatically respects the user's OS theme and features dynamic logo swapping.

### 6. 📱 Advanced Mobile Navigation
Custom "Burger Menu" using the shadcn `Sheet` component with a centered full-screen overlay and auto-closing logic.

---

## 🗄️ Database Architecture

The project uses Prisma 7 to manage the relational data model.

```prisma
model Testimonial {
  id          String   @id @default(cuid())
  name        String
  surname     String
  email       String   @unique
  role        String   // e.g., Mentor, Senior Developer, Scrum Master
  category    String   // e.g., Mentors, Mentees, Colleagues
  oneLiner    String
  content     String   @db.Text
  createdAt   DateTime @default(now())
}
```

---

## ⚙️ Automation Scripts (DevOps)

I have built a custom suite of automation scripts to ensure a consistent experience across different operating systems:

### Linux (Pop!_OS / Ubuntu) & macOS
*   `install-deps.sh`: Installs all core, UI, database adapters, and icon dependencies.
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
Create a `.env` file in the root directory:
```env
DATABASE_URL="your-prisma-postgres-connection-string"
```
Also, update the following:
*   **CV:** Place your resume in `public/Profile.pdf`.
*   **Formspree:** Update the form `action` URL in `src/app/page.tsx`.
*   **Images:** Place your profile photo in `public/image/portfolio-profile.jpg`.

---

## 🛠️ Development & Deployment

### Run Local Server
```bash
npm run dev
```

### Database Sync
Whenever you update the schema, sync it with your Prisma Postgres instance:
```bash
npx prisma db push
```

### Safe Deployment
To push changes to production safely (runs `lint`, `type-check`, and `build` first):

**On Linux:** `./deploy.sh` | **On Windows:** `.\deploy.ps1`

---

## 📸 Metadata & SEO
*   **Metadata API:** Optimized for SEO titles and descriptions.
*   **OpenGraph:** Pre-configured rich link previews for LinkedIn and Twitter.
*   **Favicon:** Custom branding integrated via `src/app/icon.png`.

---

**Author:** Katlego Barayi  
**License:** [MIT](LICENSE)