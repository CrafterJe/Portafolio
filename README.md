# Raul Juarez Suarez — Portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4, TypeScript, and Framer Motion.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Hostinger (static export)

## 📁 Project Structure
```
app/
├── components/
│   ├── sections/     # Page sections (Hero, About, Skills, Projects)
│   └── ui/           # Reusable UI components (Navbar)
├── lib/
│   └── data.ts       # Portfolio content & personal info
├── globals.css
├── layout.tsx
└── page.tsx
public/
└── cv/               # Downloadable CV
```

## 🛠️ Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment

This project uses Next.js static export for deployment on Hostinger:
```bash
npm run build
```

Upload the contents of the `out/` folder to your Hostinger `public_html` directory.

## 📄 License

MIT © 2025 Raul Juarez Suarez
