// app/components/ui/Footer.tsx
"use client";
import { personalInfo } from "@/app/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #27272a",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Copyright */}
        <p style={{ color: "#71717a", fontSize: "0.85rem" }}>
          © {year} {personalInfo.name}. Todos los derechos reservados.
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              color: "#71717a",
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
          >
            {personalInfo.email}
          </a>

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#71717a",
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
          >
            GitHub ↗
          </a>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#71717a",
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}