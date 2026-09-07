# Krishna — Personal Portfolio Website ("Building with Data")

A recruiter-focused, editorial portfolio website built for **Krishna**, a B.Tech Computer Science and Engineering candidate specializing in **Data Science** (2022–2026) at **Amrita Sai Institute of Science and Technology**.

---

## 🌟 Key Highlights & Design Decisions

- **Visual Concept: "BUILDING WITH DATA"**: Combines minimalism, editorial typography, and high-contrast dark canvas styling. No generic student templates, no fake percentage bars, no exaggerated seniority claims.
- **Interactive Analytical Sandbox**: Demonstrates practical data manipulation (*"Raw Data → Filter → Analyze → Insight"*) where recruiters can interactively filter, sort, and inspect real-time computed latency metrics and distribution charts.
- **Strictly Grounded & Credible**:
  - **Education**: B.Tech CSE (Data Science Specialization, 2022–2026) with focus on Statistical Analysis & DBMS; Class XII (SR-Sri Gayatri Junior College, 2022).
  - **Industry Exposure**: Accurately presented as technical seminar participation at **Microsoft Experts Live India 2025** in Hyderabad (Enterprise Data Trends & Modern IT Infrastructure).
  - **Certification**: Python Programming Certification from **Skill India** (2024).
  - **Projects**: Python Data Pipeline Automation, Relational DBMS Query & Indexing Analysis, and Interactive Exploratory Analytics Dashboard.
- **Single Source of Truth (`src/data/portfolioData.ts`)**: Update your email, LinkedIn URL, GitHub profile, and project links in one single file without touching UI components.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite
- **Styling**: Tailwind CSS with custom editorial typography, hairline grids, and dark theme
- **Icons**: Lucide React
- **Accessibility**: Semantic HTML5, visible focus indicators, `prefers-reduced-motion` compliance

---

## 🚀 Running Locally

In PowerShell (on Windows):

```powershell
# Install dependencies (already installed)
npm.cmd install

# Start local development server
npm.cmd run dev

# Build production bundle
npm.cmd run build

# Preview production build locally
npm.cmd run preview
```

The dev server will run at `http://localhost:3000`.

---

## 📄 Connecting Your Resume PDF

1. Place your final resume PDF in the `public/` folder.
2. Name the file: `resume.pdf`.
3. The **"Download Resume"** button on the website and the modal will automatically serve `/resume.pdf`.

---

## 📬 Contact & Configuration

Edit `src/data/portfolioData.ts` to customize:
- `contactInfo.email`: Your preferred contact email
- `contactInfo.linkedInUrl`: Your LinkedIn profile URL
- `contactInfo.gitHubUrl`: Your GitHub profile URL
- `selectedProjects`: Add links to your GitHub repositories or live demos
