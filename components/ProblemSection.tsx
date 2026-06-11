"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const problems = [
  "投稿しているのにフォロワーが全然増えない",
  "SNSを頑張っているのに集客に繋がらない",
  "何を投稿すればいいか、正直わからない",
  "投稿作業に追われて本業が疎かになっている",
  "競合サロンにSNSで差をつけられている",
];

const leftItems = [0, 1, 2];
const rightItems = [3, 4];

const leftPositions = [
  { top: "10%", left: "0" },
  { top: "40%", left: "2%" },
  { top: "70%", left: "0" },
];

const rightPositions = [
  { top: "20%", right: "0" },
  { top: "55%", right: "2%" },
];

export default function ProblemSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: "-80px" });
  const inView2 = useInView(ref2, { once: true, margin: "-80px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* Part 1: Problems */}
      <section ref={ref1} style={{ backgroundColor: "#FFFFFF", padding: "96px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              marginBottom: "12px",
              color: "#e6683c",
            }}
          >
            PROBLEM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              textAlign: "center",
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              fontWeight: 900,
              color: "#1a1a1a",
              marginBottom: "48px",
              lineHeight: 1.4,
            }}
          >
            こんな悩み、抱えていませんか？
          </motion.h2>

          {/* Mobile layout */}
          {isMobile && (
            <>
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <img src="/img/sloth_confused.png" alt="" style={{ width: "160px", height: "auto", margin: "0 auto" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {problems.map((problem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                      padding: "12px 16px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span style={{ color: "#E8894A", fontSize: "20px", lineHeight: 1, flexShrink: 0 }}>●</span>
                    <span style={{ fontSize: "1rem", color: "#1a1a1a", fontWeight: 600, lineHeight: 1.5 }}>
                      {problem}
                    </span>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* PC layout */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ position: "relative", height: "400px" }}
            >
              {/* Center illustration */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img src="/img/sloth_confused.png" alt="" style={{ width: "200px", height: "auto" }} />
              </div>

              {/* Left items */}
              {leftItems.map((idx, pos) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    position: "absolute",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "10px 16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    ...leftPositions[pos],
                  }}
                >
                  <span style={{ color: "#E8894A", fontSize: "16px", lineHeight: 1, flexShrink: 0 }}>●</span>
                  {problems[idx]}
                </motion.div>
              ))}

              {/* Right items */}
              {rightItems.map((idx, pos) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    position: "absolute",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "10px 16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    ...rightPositions[pos],
                  }}
                >
                  <span style={{ color: "#E8894A", fontSize: "16px", lineHeight: 1, flexShrink: 0 }}>●</span>
                  {problems[idx]}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Part 2: Solution steps */}
      <section ref={ref2} style={{ backgroundColor: "#E8F4FD", padding: "80px 24px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          {/* Catchcopy */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#1a1a1a",
              textAlign: "center",
              marginBottom: "36px",
              lineHeight: 1.4,
            }}
          >
            それ、やり方が間違ってるだけです。
          </motion.h2>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#E8894A", marginBottom: "10px" }}>❌ よくある失敗パターン</p>
            <p style={{ fontSize: "15px", color: "#1a1a1a", lineHeight: 1.7 }}>
              "映える写真を投稿し続けたけど、フォロワーも集客も変わらない…"
            </p>
          </motion.div>

          {/* Arrow */}
          <div style={{ textAlign: "center", color: "#ccc", fontSize: "24px", margin: "8px 0" }}>↓</div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>📊 その理由</p>
            <p style={{ fontSize: "15px", color: "#1a1a1a", lineHeight: 1.7 }}>
              SNSは「発信量」じゃなく「戦略」で結果が変わります。数値を見ずに投稿し続けても、正しい方向に進んでいるかわかりません。
            </p>
          </motion.div>

          {/* Arrow */}
          <div style={{ textAlign: "center", color: "#ccc", fontSize: "24px", margin: "8px 0" }}>↓</div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              backgroundColor: "#FDF3E7",
              borderRadius: "16px",
              padding: "20px",
              border: "1.5px solid #E8894A",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#E8894A", marginBottom: "10px" }}>✅ braDvoがやること</p>
            <p style={{ fontSize: "15px", color: "#1a1a1a", lineHeight: 1.7 }}>
              毎月の数値を分析し、何が効いて何が効いていないかを特定。戦略を修正しながら<strong style={{ color: "#E8894A", fontWeight: 700 }}>3ヶ月で結果を出します</strong>。
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
