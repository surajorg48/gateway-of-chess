# GatewayOfChess ♟️

> **The Complete Software Platform for Every Chess Academy**
> Manage, teach, engage, and grow. Everything you need to run your chess academy, empower coaches, and help every learner reach their full potential.

---

## 🌟 Overview

**GatewayOfChess** is an end-to-end management and learning platform tailored specifically for chess academies, coaches, students, and tournament organizers. It combines administrative operations, interactive training tools, student tracking, tournament hosting, and seamless communication into one unified, elegant portal.

---

## ✨ Features & Pages

- **Home (`index.html`)**: Complete platform overview, feature highlights, value proposition, coach testimonials, and dynamic interactive elements.
- **Platform (`platform.html`)**: Deep dive into the core architecture, classroom management, live board analysis, homework modules, and performance analytics.
- **For Academies (`for-academies.html`)**: Tailored solutions for academy owners, batch scheduling, billing, attendance, and multi-branch control.
- **For Coaches (`for-coaches.html`)**: Tools for lesson planning, student evaluation, opening repertoires, and student progress reports.
- **Events & Tournaments (`events.html`)**: Swiss-system pairing, round-robin management, live broadcast integration, and registration handling.
- **Academics & Curriculum (`academics.html`)**: Structured curriculum levels (Beginner, Intermediate, Advanced, Masterclass), puzzles, and gamified mastery paths.
- **Pricing (`pricing.html`)**: Transparent tier comparison for solo coaches, growing academies, and enterprise organizations.
- **About Us (`about-us.html`)**: Mission, leadership vision, core values, and community impact.
- **Book a Demo (`book-demo.html`)**: Interactive consultation booking for academy directors and coaches.
- **Login (`login.html`)**: Multi-role portal authentication (Academies, Coaches, Students, Parents).

---

## 🛠️ Tech Stack

- **Bundler / Dev Server**: [Vite](https://vitejs.dev/)
- **Core**: Semantic HTML5, Vanilla JavaScript (ES Modules)
- **Styling**: Modular CSS (`src/styles/` compiled to `assets/css/style.css`)
- **Assets**: Optimized web assets in `assets/`
- **SEO & Discoverability**: `robots.txt`, `sitemap.xml`, OpenGraph meta tags

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation

```bash
# Clone the repository
git clone https://github.com/surajorg48/gateway-of-chess.git

# Navigate into the project directory
cd gateway-of-chess

# Install dependencies
npm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Compile and optimize the project for deployment:

```bash
npm run build
```

The production-ready assets will be generated in the `dist/` directory.

### Preview Production Build

Preview the generated build locally:

```bash
npm run preview
```

---

## 📁 Directory Structure

```text
gateway-of-chess/
├── assets/                  # Production-optimized web assets
│   ├── about/               # About page imagery
│   ├── academics/           # Curriculum & study imagery
│   ├── brand/               # Brand logos and emblems
│   ├── coaches/             # Coach showcase imagery
│   ├── css/                 # Consolidated style.css
│   ├── events/              # Tournament & event imagery
│   ├── js/                  # main.js client script
│   └── platform/            # Platform & feature showcase imagery
├── public/                  # Static assets served at root (robots.txt, sitemap.xml)
├── src/
│   ├── scripts/             # Source JavaScript
│   └── styles/              # Modular source CSS
│       ├── base.css
│       ├── components.css
│       ├── main.css
│       ├── pages.css
│       ├── sections.css
│       └── variables.css
├── about-us.html
├── academics.html
├── book-demo.html
├── events.html
├── for-academies.html
├── for-coaches.html
├── index.html
├── login.html
├── platform.html
├── pricing.html
├── build_css.py             # CSS compilation script
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 License

All rights reserved &copy; 2026 GatewayOfChess.
