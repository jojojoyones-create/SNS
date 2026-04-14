"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ShieldCheck, Search } from "lucide-react";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

const achievements = [
  {
    icon: TrendingUp,
    title: "月間集客数 15,000〜20,000件達成",
    desc: "業界最多水準の集客実績。数値分析と継続的な改善により、クライアントのビジネス成長を力強くサポートします。",
  },
  {
    icon: ShieldCheck,
    title: "薬機法管理者資格保有",
    desc: "クリーンかつ高効率な広告運用を実現。法令遵守を徹底しながら、最大限の効果を引き出す運用設計が強みです。",
  },
  {
    icon: Search,
    title: "ブランドイメージ回復",
    desc: "SEOネガティブキーワードの完全排除とブランドイメージ回復。長期的な視点で信頼性の高いブランドを構築します。",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#F5E6D0", padding: "96px 24px" }}
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
          EXPERIENCE &amp; ACHIEVEMENTS
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
            marginBottom: "64px",
          }}
        >
          実績が証明する、確かな成果。
        </motion.h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {achievements.map((item, i) => {
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
                  border: "1px solid #C4873A",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(196,135,58,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color="#C4873A" />
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
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
