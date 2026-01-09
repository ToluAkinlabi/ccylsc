import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MobileNav from "./components/MobileNav";

const roboto = Roboto({ weight: ["300", "400", "500", "700", "900"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Capital City Youth Leadership & Service Corps",
  description:
    "CC-YLSC: Equipping DC youth with character, civic responsibility, workforce readiness, and service orientation.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <header className="header">
          <div className="container nav">
            <div className="brand">
              <img src="/logo.svg" alt="CC-YLSC" className="logo" />
              <span className="brand-full">Capital City Youth Leadership & Service Corps</span>
              <span className="brand-short">CCYLSC</span>
            </div>
            <nav className="desktop-nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/jobs">Jobs</a>
              <a href="/contact">Contact</a>
            </nav>
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div>© {new Date().getFullYear()} CC-YLSC. All rights reserved.</div>
            <div>Washington, DC • Faith-based, nonpartisan youth leadership & service initiative.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
