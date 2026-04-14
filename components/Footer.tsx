"use client";

const IG_GRADIENT = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        padding: "48px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Logo */}
        <span
          style={{
            display: "block",
            fontSize: "2rem",
            fontWeight: 900,
            background: IG_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "24px",
            letterSpacing: "0.05em",
          }}
        >
          JON
        </span>

        {/* CTA Button */}
        <a
          href="https://x.com/rgrrgr_sns"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: IG_GRADIENT,
            color: "#FFFFFF",
            padding: "12px 28px",
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
            marginBottom: "32px",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
        >
          𝕏 Xで相談する
        </a>

        {/* Copyright */}
        <p
          style={{
            color: "#888888",
            fontSize: "0.85rem",
          }}
        >
          © 2026 JON. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
