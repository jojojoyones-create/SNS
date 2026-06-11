"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "無料相談（X DM）",
    desc: "まずはお気軽にDMで現状をお聞かせください。",
  },
  {
    num: "02",
    title: "現状診断・ご提案",
    desc: "SNSアカウントを診断し、最適なプランと3ヶ月の戦略をご提案します。",
  },
  {
    num: "03",
    title: "ご契約・キックオフ",
    desc: "契約後、月次戦略・投稿方針を設計。初月から動き出せる体制を整えます。",
  },
  {
    num: "04",
    title: "運用開始・月次改善",
    desc: "毎月レポートと改善提案を行いながら数字にコミットして運用します。",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#FFFFFF", padding: "96px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            color: "#5BB8E8",
          }}
        >
          PROCESS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            fontWeight: 900,
            color: "#1a1a1a",
            marginBottom: "64px",
          }}
        >
          ご契約からの流れ
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {/* Step indicator + connector line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #5BB8E8, #2196F3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      height: "40px",
                      backgroundColor: "#C4D8E8",
                      margin: "4px 0",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingTop: "12px", paddingBottom: i < steps.length - 1 ? "28px" : "0" }}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    marginBottom: "6px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#555555", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
