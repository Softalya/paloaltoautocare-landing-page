import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Palo Alto Auto Care - Premier Auto Service & Repair in Palo Alto, CA",
  description: "Palo Alto's trusted auto care experts. ASE Certified mechanics offering routine maintenance, diagnostics, smog testing, tire services, and pre-owned vehicle sales. 5-star rated service in the Bay Area.",
  keywords: ["auto repair Palo Alto", "car service Palo Alto", "mechanic Palo Alto", "oil change", "smog test", "tire service", "ASE certified", "Bay Area auto care", "pre-owned cars Palo Alto"],
  authors: [{ name: "Palo Alto Auto Care" }],
  creator: "Palo Alto Auto Care",
  publisher: "Palo Alto Auto Care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paloaltoautocare.com",
    siteName: "Palo Alto Auto Care",
    title: "Palo Alto Auto Care - Premier Auto Service & Repair",
    description: "Expert auto maintenance and repair services in Palo Alto. ASE Certified technicians, 5-star rated, transparent pricing. Schedule your service today!",
    images: [
      {
        url: "/logo/palo-alto-lux-horizontal-pri.svg",
        width: 1200,
        height: 630,
        alt: "Palo Alto Auto Care Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palo Alto Auto Care - Premier Auto Service & Repair",
    description: "Expert auto maintenance and repair services in Palo Alto. ASE Certified technicians, 5-star rated.",
    images: ["/logo/palo-alto-lux-horizontal-pri.svg"],
  },
  alternates: {
    canonical: "https://paloaltoautocare.com",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
