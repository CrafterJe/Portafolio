// app/components/ui/ScrollToTop.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#6366f1",
            border: "none",
            color: "white",
            fontSize: "1.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99,
            transition: "background-color 0.2s",
            boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6366f1")}
          aria-label="Volver arriba"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}