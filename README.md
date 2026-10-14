# Pranav Mukund Deshmukh — AI & Data Science Portfolio Website

A modern, responsive, high-performance portfolio website built with **React**, **TypeScript**, and **Tailwind CSS** for **Pranav Mukund Deshmukh**, an Artificial Intelligence and Data Science Engineering student at R.C. Patel Institute of Technology, Shirpur.

---

## 🌟 Key Features

1. **Futuristic AI-Themed Design**: Deep navy/black cyber palette with glowing cyan and indigo accents, interactive HTML5 canvas neural particle constellation reacting to mouse cursor movements.
2. **Seamless Dark / Light Mode**: Persistent theme switcher (stored in `localStorage`) with carefully tuned palettes for both modes.
3. **Interactive Project Showcase**:
   - Filterable projects across *AI & Machine Learning*, *Algorithms & Optimization*, and *Data Science & Systems*.
   - In-depth modal with problem statements, architectural methodology, highlights, and direct GitHub links.
   - Includes real student projects:
     - *Smart Resale Price Prediction for Mobile Phones*
     - *Predicting the Progression of Diabetic Retinopathy from Retinal Scans*
     - *Smart Exam Seating Arrangement System Using Greedy and Backtracking Algorithms*
     - *Automated Student Attendance Monitoring and Analytics System*
4. **Structured Technical Skills**:
   - Categorized into *Programming*, *AI & Machine Learning*, *Data Science*, *Tools*, and *Databases*.
   - Live interactive search bar and filter pills.
   - Honest, unexaggerated skill levels and mastery indices.
5. **Timeline-Style Education**:
   - Highlighting Bachelor of Technology in AI & DS at R.C. Patel Institute of Technology (RCPIT).
   - Relevant coursework: Data Structures, Machine Learning, Deep Learning, DBMS (SQL), NLP, OOPs.
6. **Experience, Certifications & Achievements**:
   - Tabbed layout covering certifications, practical student developer roles, and technical workshops.
   - Dedicated milestone cards for competitive programming, project showcases, and hackathons.
7. **Interactive Resume System**:
   - Includes an actual downloadable resume PDF (`resume-pranav-deshmukh.pdf`).
   - In-browser interactive printable preview modal with celebratory confetti on download.
8. **Functional Contact System**:
   - Validated contact form with quick-topic selector chips.
   - 1-click email copy to clipboard with toast notification.
   - Ready for Formspree/Web3Forms integration or instant `mailto:` launch.
9. **Fully Centralized Configuration**:
   - Every piece of personal information, project, skill, and link is cleanly defined in `src/data/portfolioData.ts`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Keyframes & Gradients
- **Icons**: Lucide React + Custom Brand SVGs
- **Effects**: Canvas Confetti, HTML5 Canvas Particle Engine
- **Bundler**: Vite

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm

### 2. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Content

All portfolio content is decoupled from UI code and located in:
👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

### Update Personal Information
```typescript
export const portfolioData = {
  personal: {
    name: "Pranav Mukund Deshmukh",
    headline: "Aspiring AI Engineer | Data Science Enthusiast | Problem Solver",
    email: "pranavdeshmukh2910@gmail.com",
    linkedin: "https://www.linkedin.com/in/...",
    github: "https://github.com/...",
    // ...
  }
}
```

### Add or Edit Projects
Simply modify the `projects` array in `src/data/portfolioData.ts`. Add your screenshots, GitHub repository links, or live deployment URLs.

### Connect Contact Form to Formspree
To receive messages directly to your email inbox without running a backend server:
1. Create a free form at [formspree.io](https://formspree.io).
2. Paste your Formspree endpoint into `portfolioData.contactConfig.formspreeEndpoint` in `src/data/portfolioData.ts`:
   ```typescript
   contactConfig: {
     formspreeEndpoint: "https://formspree.io/f/your_form_id",
     fallbackEmail: "pranavdeshmukh2910@gmail.com",
     subjectPrefix: "[Portfolio Inquiry] ",
   }
   ```

### Update Resume PDF
Replace `public/resume-pranav-deshmukh.pdf` with your updated resume, or run:
```bash
python generate_resume.py
```

---

## 🌐 Free One-Click Deployment

### Deploy to Vercel
1. Push your repository to GitHub.
2. Visit [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **"Deploy"** (Vercel automatically detects Vite).

### Deploy to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set build command to `npm run build` and publish directory to `dist`.
3. Click **"Deploy site"**.
