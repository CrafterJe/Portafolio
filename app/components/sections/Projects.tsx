// app/components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/lib/data";

const placeholderColors: Record<string, string> = {
  "SkillSwap": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  "Clash of Clans War Tracker": "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  "Telecomunicaciones": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
  "ASCII Converter": "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  "Popular Opinion": "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
  "Compresser": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
  "Compresor de Archivos": "linear-gradient(135deg, #64748b 0%, #475569 100%)",
};

function ProjectImage({ title }: { title: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: placeholderColors[title] || "linear-gradient(135deg, #27272a 0%, #3f3f46 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.85rem",
          fontWeight: 500,
        }}
      >
        {title}
      </span>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: "8rem 1.5rem",
        borderTop: "1px solid #27272a",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            color: "#6366f1",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Proyectos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "#ededed",
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
            lineHeight: 1.2,
          }}
        >
          Lo que he construido
        </motion.h2>

        {/* Featured Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "2rem" }}>
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                backgroundColor: "#111111",
                border: "1px solid #27272a",
                borderRadius: "16px",
                overflow: "hidden",
                minHeight: "300px",
              }}
              className="featured-card"
            >
              {/* Imagen */}
              <div style={{ height: "100%", minHeight: "300px" }}>
                <ProjectImage title={project.title} />
              </div>

              {/* Info */}
              <div
                style={{
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    color: "#6366f1",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  ⭐ Proyecto destacado
                </span>

                <h3
                  style={{
                    color: "#ededed",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>

                <p style={{ color: "#71717a", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.3)",
                        color: "#a5b4fc",
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
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
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#6366f1",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6366f1")}
                    >
                      {project.live.includes("play.google") ? "Google Play ↗" : "Ver live ↗"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest of projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {rest.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: "#111111",
                border: "1px solid #27272a",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#27272a")}
            >
              {/* Imagen */}
              <div style={{ height: "180px" }}>
                <ProjectImage title={project.title} />
              </div>

              {/* Info */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h3
                  style={{
                    color: "#ededed",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>

                <p style={{ color: "#71717a", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "#1a1a1a",
                        border: "1px solid #27272a",
                        color: "#71717a",
                        fontSize: "0.7rem",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "1rem", marginTop: "0.25rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#71717a", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ededed")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#6366f1", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6366f1")}
                    >
                      Ver live ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}