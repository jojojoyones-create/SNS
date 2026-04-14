"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { BarChart2, Star, Video, ArrowRight } from "lucide-react";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

const services = [
  {
    icon: BarChart2,
    title: "SNSマーケティング",
    desc: "数値分析に基づいた集客・単価改善。データドリブンな戦略で、フォロワー獲得から収益化まで一気通貫でサポートします。",
  },
  {
    icon: Star,
    title: "ブランディング",
    desc: "中長期的な視点でのクリーンなブランド構築。ネガティブイメージを排除し、信頼されるブランドへ育てます。",
  },
  {
    icon: Video,
    title: "動画編集 / クリエイティブ制作",
    desc: "SNSに最適化されたショート動画・リール制作。視覚的に訴求力の高いコンテンツで、エンゲージメントを最大化します。",
    badge: "Portfolio Coming Soon",
  },
];

const loopSteps = ["SNS分析", "改善提案", "反映", "再分析"];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{ backgroundColor: "#EBF7FD", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            marginBottom: "12px",
            background: IG_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SERVICES
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 900,
            color: "#1a1a1a",
            marginBottom: "48px",
          }}
        >
          提供する3つのサービス
        </motion.h2>

        {/* THE GROWTH LOOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #5BB8E8",
            borderRadius: "16px",
            padding: "28px 32px",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              marginBottom: "16px",
              background: IG_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            THE GROWTH LOOP
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {loopSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "rgba(91,184,232,0.15)",
                    border: "1px solid #5BB8E8",
                    borderRadius: "8px",
                    padding: "8px 18px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#1a1a1a",
                  }}
                >
                  {step}
                </span>
                {i < loopSteps.length - 1 && (
                  <ArrowRight size={18} color="#5BB8E8" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #5BB8E8",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                }}
              >
                {item.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: IG_GRADIENT,
                      color: "#FFFFFF",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(91,184,232,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color="#5BB8E8" />
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#333333",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
