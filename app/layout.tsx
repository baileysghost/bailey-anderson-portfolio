import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/space-grotesk";
import "@fontsource/ibm-plex-mono/latin-400.css";
import Header from "../components/Header";
import { Mark, Icon } from "../components/visuals";
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const metadata: Metadata = {
  ...(host
    ? {
        metadataBase: new URL("https://" + host),
        alternates: { canonical: "/" },
      }
    : {}),
  title: {
    default: "Bailey Anderson — AI Engineering & Creative Technology",
    template: "%s | Bailey Anderson",
  },
  description:
    "Selected engineering work by Bailey Anderson, founder of Red Phoenix Global LLC. Explore agentic research systems, trading software, game prototypes and music production.",
  openGraph: {
    type: "website",
    siteName: "Bailey Anderson",
    images: host ? [{ url: "/social.jpg", width: 1200, height: 630 }] : [],
  },
  twitter: { card: "summary_large_image", images: host ? ["/social.jpg"] : [] },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <footer>
          <div className="wrap foot">
            <span className="brand">
              <Mark /> Bailey Anderson
            </span>
            <span>Red Phoenix Global LLC · Los Angeles, CA</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
