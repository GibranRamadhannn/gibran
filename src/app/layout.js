import { Space_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { env } from "prisma/config";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: `${env.APP_NAME || "Gibran"}`,
    template: `%s`,
  },
  description: "Personal portfolio of Mhd Gibran Ramadhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceMono.variable} antialiased font-sans`}
      >
        <div className="min-h-screen">
          <main className="layout">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
