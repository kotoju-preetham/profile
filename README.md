# ⚡ Premium GSAP & Glassmorphic Developer Portfolio

Welcome to the source repository of my high-end interactive portfolio. Tailored to a dark cinematic theme, this developer-centric showcase integrates modern glassmorphic panels, custom physics-based background particle networks, and rich fluid animations.

🔗 Live Showcase: **[kotojupreetham.github.io/profile/](https://kotojupreetham.github.io/profile/)**

---

## 🎨 Tech Stack & Architecture

- **Core**: React 19 (TypeScript) + Vite
- **Styling**: Tailwind CSS v4 (native `@tailwindcss/vite` compiler)
- **Animations**: GSAP (GreenSock) + ScrollTrigger
- **Background Physics**: Lightweight Canvas 2D particle nebula
- **Icons**: Lucide React + embedded brand SVGs

---

## ✨ Immersive Features

### 🖥️ 1. macOS-Style Hero Terminal
A floating console window highlighting the shell query `preetham@cvr:~$ whoami`. It displays:
- Cinematic character-by-character staggered title reveal using GSAP.
- Pulsing terminal block cursor.
- Grid-formatted code metadata showcasing current educational affiliation and graduation year.

### 📐 2. Interactive About & Skills
- Two-column profile detailing CS philosophies at CVR College of Engineering.
- Glassmorphic education sub-card and floating background hexagon graphic with continuous spin parallax.
- Micro-interactive skill nodes (Languages, Frontend, Mobile & Cloud, Exploring) that highlight and glow on cursor hover.

### 🎯 3. Standalone Career Vision
- A dedicated career timeline banner capturing current targets (scalable architectures, local AI agents, 3D worlds).
- Highlights custom tags and standardizes product vision.

### 📈 4. Scroll-Triggered Projects Timeline
- A central glowing timeline trace line that grows as you scroll.
- Alternate-staggered project cards (Orion, Jarvis, AI-Doc-Converter, FestFlow, Chit-Tracker, Metal Wheels) which reveal code mockups, metrics, and GitHub links as the tracer line passes.

### 📦 5. Custom GSAP Cursor & Nav
- Inertia-tracked cursor containing a glowing halo that expands when hovering over clickable cards and links.
- Centered floating pill navbar with indicator states and a pulsing `[ Available for Projects ]` badge.
- Coder terminal outputs for email, LinkedIn, and Instagram contacts in the footer.

---

## ⚙️ Local Development

### 1. Clone & Install
```bash
# Clone the repository
git clone https://github.com/kotojupreetham/profile.git
cd profile

# Install dependencies
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```
Open **[http://localhost:5173/profile/](http://localhost:5173/profile/)** in your browser.

### 3. Build Production
```bash
npm run build
```
Generates static production assets inside the `dist/` directory.

---

## 🚀 GitHub Pages Deployment

Vite is pre-configured with the correct sub-folder base (`/profile/`). To deploy:

1. **Install GitHub Pages utility**:
   ```bash
   npm install -D gh-pages
   ```
2. **Add deployment scripts** in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Publish to GitHub Pages**:
   ```bash
   npm run deploy
   ```
This automatically builds the project and pushes the compiled assets to your `gh-pages` branch, hosting the site live at **`https://kotojupreetham.github.io/profile/`**.
