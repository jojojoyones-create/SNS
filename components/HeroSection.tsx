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
      style={{
        background: "linear-gradient(135deg, #5BB8E8 0%, #87CEEB 100%)",
        paddingTop: "120px",
        paddingBottom: "80px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "28px" }}
        >
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#FFFFFF",
              borderRadius: "999px",
              padding: "8px 20px",
              fontSize: "0.8rem",
              fontWeight: 700,
              background: "#FFFFFF",
              letterSpacing: "0.05em",
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
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.3,
            marginBottom: "24px",
            textShadow: "0 2px 12px rgba(0,0,0,0.1)",
          }}
        >
          数字を作る、ブランドを磨く。<br />
          SNSマーケティングの最適解を。
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            color: "#FFFFFF",
            lineHeight: 1.8,
            marginBottom: "40px",
            opacity: 0.92,
          }}
        >
          アフィリエイト広告運用、事業主側でのマーケ責任者を経て、<br className="hidden sm:block" />
          現在はSNSマーケティングと動画編集を軸に活動。<br className="hidden sm:block" />
          戦略・クリエイティブ・分析まで一気通貫でサポートします。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
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
              padding: "14px 32px",
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
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            𝕏 Xで相談する
          </a>

          <a
            href="#services"
            style={{
              border: "2px solid #FFFFFF",
              color: "#FFFFFF",
              padding: "14px 32px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            }}
          >
            サービスを見る ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
