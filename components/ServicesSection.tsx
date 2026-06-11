"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BarChart2, Palette, Video } from "lucide-react";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

const services = [
  {
    icon: BarChart2,
    img: "/img/sloth_sns.png",
    title: "SNSマーケティング",
    desc: "数値分析に基づいた集客・単価改善。データドリブンな戦略で、フォロワー獲得から収益化まで一気通貫でサポートします。",
  },
  {
    icon: Palette,
    img: "/img/sloth_brand.png",
    title: "ブランディング",
    desc: "中長期的な視点でのクリーンなブランド構築。ネガティブイメージを排除し、信頼されるブランドへ育てます。",
  },
  {
    icon: Video,
    img: "/img/sloth_video.png",
    title: "動画編集 / クリエイティブ制作",
    desc: "SNSに最適化されたショート動画・リール制作。視覚的に訴求力の高いコンテンツで、エンゲージメントを最大化します。",
  },
];

const loopSteps = ["SNS分析", "改善提案", "施策反映", "効果測定"];

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      style={{ backgroundColor: "#E8F4FD", padding: "96px 24px" }}
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
            color: "#5BB8E8",
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

        {/* Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
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
                  position: "relative",
                }}
              >
                {/* Top row: icon+title (left) / illustration (right) */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  {/* Left: icon box + title */}
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        backgroundColor: "#FDF3E7",
                        borderRadius: "12px",
                        padding: "10px",
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color="#E8894A" />
                    </div>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        lineHeight: 1.4,
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {/* Right: illustration */}
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: "80px", height: "auto", flexShrink: 0, alignSelf: "center" }}
                  />
                </div>
                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: 1.8,
                    textAlign: "left",
                    marginTop: "12px",
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

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
            marginTop: "48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              marginBottom: "20px",
              color: "#5BB8E8",
            }}
          >
            THE GROWTH LOOP
          </p>
          {/* 2×2 circular loop */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gridTemplateRows: "auto auto auto",
              gap: "8px",
              alignItems: "center",
              justifyItems: "center",
              maxWidth: "360px",
              margin: "0 auto",
            }}
          >
            {/* Row 1 */}
            <span style={{ backgroundColor: "rgba(91,184,232,0.15)", border: "1px solid #5BB8E8", borderRadius: "8px", padding: "8px 14px", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", width: "100%", textAlign: "center" }}>SNS分析</span>
            <span style={{ color: "#5BB8E8", fontWeight: 700, fontSize: "1.1rem" }}>→</span>
            <span style={{ backgroundColor: "rgba(91,184,232,0.15)", border: "1px solid #5BB8E8", borderRadius: "8px", padding: "8px 14px", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", width: "100%", textAlign: "center" }}>改善提案</span>
            {/* Row 2: side arrows */}
            <span style={{ color: "#5BB8E8", fontWeight: 700, fontSize: "1.1rem", justifySelf: "start", paddingLeft: "30%" }}>↑</span>
            <span />
            <span style={{ color: "#5BB8E8", fontWeight: 700, fontSize: "1.1rem", justifySelf: "end", paddingRight: "30%" }}>↓</span>
            {/* Row 3 */}
            <span style={{ backgroundColor: "rgba(91,184,232,0.15)", border: "1px solid #5BB8E8", borderRadius: "8px", padding: "8px 14px", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", width: "100%", textAlign: "center" }}>効果測定</span>
            <span style={{ color: "#5BB8E8", fontWeight: 700, fontSize: "1.1rem" }}>←</span>
            <span style={{ backgroundColor: "rgba(91,184,232,0.15)", border: "1px solid #5BB8E8", borderRadius: "8px", padding: "8px 14px", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", width: "100%", textAlign: "center" }}>施策反映</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
