"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        {/* Logo */}
        <a href="#top" style={{ textDecoration: "none", display: "block" }}>
          <Image
            src="/img/logo_white.png"
            alt="JON"
            width={160}
            height={56}
            style={{ width: "auto", height: "48px", objectFit: "contain" }}
          />
        </a>

        {/* Copyright */}
        <p
          style={{
            color: "#888888",
            fontSize: "0.82rem",
          }}
        >
          © 2026 braDvo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
