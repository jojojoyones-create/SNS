"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Clock, Send } from "lucide-react";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

const features = [
  { icon: MessageCircle, text: "まずは気軽にDMで相談OK" },
  { icon: Clock, text: "返信は基本24時間以内" },
  { icon: Send, text: "X（旧Twitter）のDMでご連絡ください" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        position: "relative",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.32), rgba(255,255,255,0.32)), url(/img/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "96px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "min(700px, calc(100% - 40px))",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(1.85rem, 6vw, 2.5rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.35,
            marginBottom: "28px",
            textShadow: "0 2px 12px rgba(0,0,0,0.1)",
          }}
        >
          まずは、話してみませんか？
        </motion.h2>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "34px",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#FFFFFF",
                  fontSize: "0.98rem",
                  fontWeight: 600,
                }}
              >
                <Icon size={20} color="#FFFFFF" style={{ flexShrink: 0 }} />
                {f.text}
              </div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <a
            href="https://x.com/rgrrgr_sns"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFFFFF",
              padding: "16px 40px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)";
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
              𝕏 で相談する
            </span>
          </a>
        </motion.div>

        {/* Handle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: "22px",
            color: "rgba(255,255,255,0.85)",
            fontSize: "0.95rem",
          }}
        >
          @rgrrgr_sns にDMをお送りください
        </motion.p>
      </div>
    </section>
  );
}
