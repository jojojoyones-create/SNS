"use client";

import { motion, type Variants } from "framer-motion";

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
  return (
    <section
      id="top"
      style={{
        position: "relative",
        backgroundImage: "linear-gradient(rgba(34,108,75,0.32), rgba(255,255,255,0.32)), url(/img/fv_img.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "120px",
        paddingBottom: "80px",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "min(800px, calc(100% - 40px))",
          margin: "0 auto",
          textAlign: "center",
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
              backgroundColor: "rgba(255,255,255,0.92)",
              borderRadius: "999px",
              padding: "9px 16px",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
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
            fontSize: "clamp(2rem, 7vw, 3.25rem)",
            fontWeight: 900,
            color: "#000000",
            lineHeight: 1.28,
            marginBottom: "18px",
            letterSpacing: "-0.02em",
            textShadow: "2px 2px 10px #ffffff, -2px 2px 10px #ffffff, 2px -2px 10px #ffffff, -2px -2px 10px #ffffff",
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
              padding: "14px 26px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
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
              border: "2px solid rgba(255,255,255,0.88)",
              color: "#FFFFFF",
              background: "rgba(255,255,255,0.2)",
              minHeight: "52px",
              padding: "14px 26px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            サービスを見る ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
