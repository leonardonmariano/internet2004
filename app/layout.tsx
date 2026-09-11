import type { Metadata } from "next";
import "./globals.css";

const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
  process.env.SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bazar Turbo 2004",
  description: "Tecnologia meio útil desde ontem. O bazar mais barulhento da internet brasileira.",
  icons: { icon: "/og.png", shortcut: "/og.png" },
  openGraph: { title: "Bazar Turbo 2004", description: "A internet cabe toda aqui!!!", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Bazar Turbo 2004" }], type: "website" },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
