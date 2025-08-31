### Astro Task Project
A modern, minimal Astro project to showcase a blog platform with Markdown posts, reusable components, and a clean design.

### 🚀 Project Overview
This project uses Astro to build a beautiful blog website with a minimal setup. It's designed to be fast, accessible, and easy to customize.

Markdown-Based Content: Write your blog posts in .md files.

Reusable Components: Build your site with modular .astro and .jsx components.

Clean & Responsive: A mobile-first design that looks great on any device.

Theme Support: Includes built-in light and dark theme support.

📁 Project Structure
Here is an overview of the file structure for this project:

astro-task/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BlogPost.astro
│   │   ├── Footer.astro
│   │   ├── Greeting.jsx
│   │   ├── Hamburger.astro
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   ├── Social.astro
│   │   └── ThemeIcon.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── MarkdownPostLayout.astro
│   ├── pages/
│   │   ├── posts/
│   │   │   ├── post-1.md
│   │   │   ├── post-2.md
│   │   │   ├── post-3.md
│   │   │   └── post-4.md
│   │   ├── tags/
│   │   │   └── [tag].astro
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── index.astro
│   │   └── rss.xml.js
│   ├── scripts/
│   │   └── menu.js
│   └── styles/
│       └── global.css
├── package.json
└── README.md

### 🛠️ Installation & Development
Get your local development environment set up with these simple steps.

Clone the repository:

git clone <your-repo-url>
cd astro-task

Install dependencies:

npm install

Start the development server:

npm run dev

Your site will be available at http://localhost:4321.

### 📝 Features
Markdown-based blog posts with frontmatter support.

Reusable Astro components for easy maintenance.

Light and dark mode support toggled by the user.

Custom layouts for standard pages and blog posts.

Responsive design for mobile, tablet, and desktop.

RSS feed generation for blog subscribers.

Tag-based post filtering.

### 📚 Technologies Used
Astro – The web framework for building fast, content-driven websites.

HTML, CSS, JavaScript – The core technologies of the web.

JSX (React) – For interactive UI components.

Markdown – For writing clean and simple blog post content.