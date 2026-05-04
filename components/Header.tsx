"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        {/* Logo */}
        <a href="#top" style={{ textDecoration: "none", display: "block" }}>
          <Image
            src="/img/logo_green.png"
            alt="JON"
            width={120}
            height={40}
            style={{ width: "auto", height: "36px", objectFit: "contain" }}
            priority
          />
        </a>

        {/* CTA Button */}
        <a
          href="https://x.com/rgrrgr_sns"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: IG_GRADIENT,
            color: "#FFFFFF",
            padding: "10px 18px",
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: "0.88rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            whiteSpace: "nowrap",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          𝕏 で相談する
        </a>
      </div>
    </motion.header>
  );
}
