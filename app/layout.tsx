import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JON | SNSマーケティング・ブランディング・動画編集",
  description:
    "数字を作る、ブランドを磨く。SNSマーケティングの最適解を。戦略・クリエイティブ・分析まで一気通貫でサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
