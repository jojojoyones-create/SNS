"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

const plans = [
  {
    name: "ライトプラン",
    price: "¥50,000",
    period: "/月",
    badge: null,
    highlight: false,
    note: "※動画制作なし・戦略/分析/指示書特化の入門プラン",
    features: [
      "SNS運用の月次戦略設計",
      "投稿方針・コンテンツ設計（編集者への指示書作成含む）",
      "月次レポート（数値分析・改善提案）",
      "月1回オンラインMTG",
    ],
  },
  {
    name: "スタンダードプラン",
    price: "¥80,000",
    period: "/月",
    badge: "★ 一番人気",
    highlight: true,
    note: null,
    features: [
      "SNS運用の月次戦略設計",
      "投稿方針・コンテンツ設計（編集者への指示書作成含む）",
      "月次レポート（数値分析・改善提案）",
      "競合分析レポート（月1回）",
      "投稿ネタストック＋ショート動画制作（月5本）",
      "チャット相談対応（平日）",
      "月2回オンラインMTG",
    ],
  },
  {
    name: "フル支援プラン",
    price: "¥120,000",
    period: "/月",
    badge: "💪 コスパ最強",
    highlight: false,
    note: null,
    features: [
      "SNS運用の月次戦略設計",
      "投稿方針・コンテンツ設計（編集者への指示書作成含む）",
      "月次レポート（数値分析・改善提案）",
      "競合分析レポート（月1回）",
      "投稿ネタストック＋ショート動画制作（月10本）",
      "チャット相談対応（平日）",
      "集客導線の設計・改善",
      "LINE公式・メルマガ連携提案",
      "広告数値・KPI管理",
      "AI検索対策（GEO・AIO）の設計支援",
      "月2回オンラインMTG",
    ],
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

export default function PricingSection() {
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
          PRICING
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
            marginBottom: "12px",
          }}
        >
          料金プラン
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            textAlign: "center",
            color: "#c0392b",
            fontWeight: 700,
            marginBottom: "48px",
            fontSize: "0.95rem",
          }}
        >
          ※初回相談は無料です。
        </motion.p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                backgroundColor: "#FFFFFF",
                border: plan.highlight
                  ? "2px solid transparent"
                  : "1px solid #C4873A",
                borderRadius: "20px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                backgroundClip: plan.highlight ? "padding-box" : undefined,
                boxShadow: plan.highlight
                  ? "0 0 0 2px #e6683c, 0 8px 32px rgba(230,104,60,0.18)"
                  : "none",
                transform: plan.highlight ? "scale(1.03)" : "scale(1)",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: IG_GRADIENT,
                    color: "#FFFFFF",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    padding: "5px 16px",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#1a1a1a",
                  marginTop: plan.badge ? "8px" : "0",
                }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 900,
                    color: "#1a1a1a",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#666666",
                    fontWeight: 500,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flexGrow: 1,
                }}
              >
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.875rem",
                      color: "#333333",
                      lineHeight: 1.5,
                    }}
                  >
                    <Check
                      size={16}
                      style={{ color: "#e6683c", flexShrink: 0, marginTop: "2px" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Note */}
              {plan.note && (
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#888888",
                    lineHeight: 1.5,
                  }}
                >
                  {plan.note}
                </p>
              )}

              {/* CTA Button */}
              <a
                href="https://x.com/rgrrgr_sns"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: IG_GRADIENT,
                  color: "#FFFFFF",
                  padding: "13px 24px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
