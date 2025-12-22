// app/layout.js (Next.js App Router)

import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "@/styles/globals.css"; // Your custom global CSS with Tailwind directives

// Poppins Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

// Inter Font (optional fallback or secondary font)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Household of God Church | Official Website",
    template: "%s | Household of God Church",
  },
  description:
    "Welcome to Household of God Church. Join us in worship, experience God's presence, and grow in faith with our vibrant community in Lagos, Nigeria.",
  keywords:
    "Household of God Church, Pastor Chris Okotie, Lagos Nigeria church, Christian worship, Bible study, Sunday service",
  authors: [{ name: "Household of God Church" }],
  creator: "Household of God Church",
  publisher: "Household of God Church",
  metadataBase: new URL("https://www.householdofgodchurch.org"), // Update with real domain later
  openGraph: {
    title: "Household of God Church",
    description: "Experience God's love and transformative power.",
    url: "https://www.householdofgodchurch.org",
    siteName: "Household of God Church",
    images: [
      {
        url: "/assets/images/og-image.jpg", // Recommended: add a 1200x630 image
        width: 1200,
        height: 630,
        alt: "Household of God Church",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Household of God Church",
    description: "Join us in worship and grow in faith.",
    images: ["/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffc107",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Essential Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon (Recommended: add these files to /public) */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
        />

        {/* LineIcons */}
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/4.0/lineicons.css"
        />

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`${poppins.className} font-sans antialiased bg-(--background) text-round)`}
      >
        {children}

        {/* Bootstrap Bundle JS (with Popper) - placed at end for performance */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
