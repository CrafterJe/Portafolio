"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Importante para SEO y rendimiento en Next.js
import { personalInfo } from "@/app/lib/data";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "CV", href: "#cv" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled || menuOpen ? "rgba(10,10,10,0.9)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #27272a" : "1px solid transparent",
      } as React.CSSProperties}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#ededed",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          } as React.CSSProperties}
        >
          {personalInfo.name.split(" ")[0]}
          <span style={{ color: "#6366f1" }}>.</span>
        </Link>

        {/* Desktop Links - Nota: Asegúrate de tener el CSS para .hide-mobile */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
          className="hide-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: "#71717a",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Nota: Asegúrate de tener el CSS para .show-mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#ededed",
            cursor: "pointer",
            display: "flex", // Cambiado de 'none' a 'flex' para manejar visibilidad vía CSS class
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          } as React.CSSProperties}
          className="show-mobile"
          aria-label="Abrir menú"
        >
          <span style={{ 
            display: "block", width: "22px", height: "2px", backgroundColor: "#ededed", 
            transition: "all 0.3s", 
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" 
          }} />
          <span style={{ 
            display: "block", width: "22px", height: "2px", backgroundColor: "#ededed", 
            transition: "all 0.3s", 
            opacity: menuOpen ? 0 : 1 
          }} />
          <span style={{ 
            display: "block", width: "22px", height: "2px", backgroundColor: "#ededed", 
            transition: "all 0.3s", 
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" 
          }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(10,10,10,0.95)",
            borderTop: "1px solid #27272a",
            padding: "1rem 1.5rem",
            position: "absolute",
            width: "100%",
            left: 0,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "#a1a1aa",
                textDecoration: "none",
                borderBottom: "1px solid #27272a",
                fontSize: "1rem",
              } as React.CSSProperties}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}