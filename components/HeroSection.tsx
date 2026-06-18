"use client";

import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        backgroundImage: isMobile
          ? "linear-gradient(rgba(34,108,75,0.32), rgba(255,255,255,0.32)), url(/img/fv_img_sp.png)"
          : "linear-gradient(rgba(34,108,75,0.32), rgba(255,255,255,0.32)), url(/img/fv_img.png)",
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "top center" : "20% center",
        backgroundRepeat: "no-repeat",
        paddingTop: isMobile ? "180px" : "120px",
        paddingBottom: "80px",
        minHeight: isMobile ? "100vh" : "100dvh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "min(800px, calc(100% - 40px))",
          margin: "0 auto",
          textAlign: "center",
          padding: "24px",
        }}
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "22px" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              backgroundColor: "rgba(255,255,255,0.92)",
              borderRadius: "999px",
              padding: "8px 14px",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            }}
          >
            <span
              style={{
                background: IG_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SNSマーケティング / ブランディング / 動画編集
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: isMobile ? "32px" : "48px",
            fontWeight: 900,
            color: "#000000",
            lineHeight: isMobile ? 1.28 : 1.3,
            marginBottom: "18px",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          数字を作る、ブランドを磨く。<br />
          SNSマーケティングの最適解を。
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <a
            href="https://x.com/rgrrgr_sns"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: IG_GRADIENT,
              color: "#FFFFFF",
              minHeight: "52px",
              padding: isMobile ? "14px 26px" : "16px 36px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: isMobile ? "1rem" : "18px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            𝕏 で相談する
          </a>

          <a
            href="#services"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1.5px solid rgba(255,255,255,0.5)",
              color: "#fff",
              minHeight: "52px",
              padding: isMobile ? "14px 26px" : "16px 36px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: isMobile ? "1rem" : "18px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
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
            <span style={{ color: "#E8603C" }}>
              サービスを見る ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
