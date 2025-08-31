### Astro Task Project
A modern, minimal Astro project to showcase a blog platform with Markdown posts, reusable components, and a clean design.

### 🚀 Project Overview
This project uses Astro to build a beautiful blog website with a minimal setup. It's designed to be fast, accessible, and easy to customize.

Markdown-Based Content: Write your blog posts in .md files.

Reusable Components: Build your site with modular .astro and .jsx components.

Clean & Responsive: A mobile-first design that looks great on any device.

Theme Support: Includes built-in light and dark theme support.

## 📁 Project Structure

```text
astro-task/
├── public/                  
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
```

### 🛠️ Installation & Development

Get your local development environment set up with these simple steps:

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd astro-task
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

## 📝 Features

- Markdown-based blog posts
- Reusable Astro components
- Light and dark mode support
- Custom layouts for pages and posts
- Responsive design

## 📚 Technologies Used

- Astro
- HTML, CSS, JavaScript
- JSX for React components
- Markdown for blog posts
