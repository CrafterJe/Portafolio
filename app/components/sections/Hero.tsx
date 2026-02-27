// app/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/app/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fondo con gradiente sutil */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Saludo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            color: "#6366f1",
            fontSize: "0.95rem",
            fontWeight: 500,
            marginBottom: "1rem",
            letterSpacing: "0.05em",
          }}
        >
          Hola, mi nombre es
        </motion.p>

        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 700,
            color: "#ededed",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
          }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "#71717a",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          {personalInfo.title}
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            color: "#71717a",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "540px",
            marginBottom: "2.5rem",
          }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              backgroundColor: "#6366f1",
              color: "white",
              padding: "0.75rem 1.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6366f1")}
          >
            Ver proyectos
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              backgroundColor: "transparent",
              color: "#ededed",
              padding: "0.75rem 1.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              border: "1px solid #27272a",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#27272a")}
          >
            Contacto
          </a>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: "flex", gap: "1.5rem", marginTop: "3rem" }}
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#71717a", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
          >
            GitHub ↗
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#71717a", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}