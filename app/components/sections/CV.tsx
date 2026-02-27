// app/components/sections/CV.tsx
"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/app/lib/data";

export default function CV() {
  return (
    <section
      id="cv"
      style={{
        padding: "8rem 1.5rem",
        borderTop: "1px solid #27272a",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
        }}
      >
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
          }}
        >
          Currículum
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
            lineHeight: 1.2,
          }}
        >
          ¿Quieres saber más?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            color: "#71717a",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            maxWidth: "480px",
          }}
        >
          Descarga mi CV para ver mi experiencia completa, educación y proyectos en detalle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <a
            href="/cv/cv.pdf"
            download
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
            Descargar CV
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
            Contáctame
          </a>
        </motion.div>
      </div>
    </section>
  );
}