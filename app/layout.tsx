import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NUPS — KAIST Space Club",
  description: "KAIST 유일의 우주 동아리 NUPS. 2026 가을학기 신입 부원을 모집합니다.",
  metadataBase: new URL("https://kaist-nups.github.io"),
  openGraph: { title: "NUPS — KAIST Space Club", description: "우주를 좋아한다는 것 하나면 충분합니다. Fall 2026 Recruiting.", images: [{ url: "og.png", width: 1600, height: 900, alt: "NUPS — KAIST Space Club, Fall 2026" }] },
  twitter: { card: "summary_large_image", title: "NUPS — KAIST Space Club", description: "Fall 2026 Recruiting", images: ["og.png"] },
  icons: { icon: "favicon.svg", shortcut: "favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
