// app/components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/lib/data";

const featured = ["MongoDB", "Python", "Angular", "React"];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "8rem 1.5rem",
        borderTop: "1px solid #27272a",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section Label */}
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
          Skills
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
          Tecnologías que uso
        </motion.h2>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              style={{
                backgroundColor: "#111111",
                border: "1px solid #27272a",
                borderRadius: "16px",
                padding: "1.75rem",
              }}
            >
              <h3
                style={{
                  color: "#ededed",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map((skill) => {
                  const isFeatured = featured.includes(skill);
                  return (
                    <span
                      key={skill}
                      style={{
                        backgroundColor: isFeatured ? "rgba(99,102,241,0.1)" : "#1a1a1a",
                        border: `1px solid ${isFeatured ? "#6366f1" : "#27272a"}`,
                        color: isFeatured ? "#a5b4fc" : "#71717a",
                        fontSize: "0.8rem",
                        padding: "0.35rem 0.85rem",
                        borderRadius: "6px",
                        transition: "all 0.2s",
                        cursor: "default",
                        fontWeight: isFeatured ? 600 : 400,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#6366f1";
                        e.currentTarget.style.color = "#ededed";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isFeatured ? "#6366f1" : "#27272a";
                        e.currentTarget.style.color = isFeatured ? "#a5b4fc" : "#71717a";
                      }}
                    >
                      {isFeatured ? `⭐ ${skill}` : skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}