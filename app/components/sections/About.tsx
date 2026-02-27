// app/components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/app/lib/data";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Label */}
        <p
          style={{
            color: "#6366f1",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Sobre mí
        </p>

        {/* Título */}
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "#ededed",
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
            lineHeight: 1.2,
          }}
        >
          Un poco sobre quién soy
        </h2>

        {/* Grid contenido */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Texto */}
          <div>
            <p
              style={{
                color: "#71717a",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              {personalInfo.bio}
            </p>
            <p
              style={{
                color: "#71717a",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              Cuando no estoy programando me gusta seguir aprendiendo nuevas
              tecnologías y contribuir a proyectos que generen impacto real.
            </p>

            {/* Info rápida */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { label: "Ubicación", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
                { label: "Disponibilidad", value: "Abierto a oportunidades" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem" }}>
                  <span
                    style={{
                      color: "#6366f1",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      minWidth: "100px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ color: "#71717a", fontSize: "0.85rem" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card decorativa */}
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid #27272a",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {[
              { number: "+1", label: "Años de experiencia" },
              { number: "4", label: "Proyectos completados" },
              { number: "5+", label: "Tecnologías dominadas" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  borderBottom: "1px solid #27272a",
                  paddingBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#ededed",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.number}
                </p>
                <p style={{ color: "#71717a", fontSize: "0.85rem" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}