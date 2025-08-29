import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Стоматологическая клиника в Алматы | Dental Clinic Almaty",
  description:
    "Современная стоматологическая клиника в Алматы. Профессиональное лечение зубов, имплантация, отбеливание, ортодонтия. Опытные врачи, современное оборудование, доступные цены.",
  keywords:
    "стоматология Алматы, зубной врач, имплантация зубов, отбеливание зубов, ортодонтия, лечение зубов, dental clinic Almaty",
  authors: [{ name: "Dental Clinic Almaty" }],
  creator: "Dental Clinic Almaty",
  publisher: "Dental Clinic Almaty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dentalclinic.kz"),
  alternates: {
    canonical: "/",
    languages: {
      "ru-KZ": "/ru",
      "uz-UZ": "/uz",
    },
  },
  openGraph: {
    title: "Стоматологическая клиника в Алматы | Dental Clinic",
    description: "Современная стоматология с профессиональным подходом к лечению",
    url: "https://dentalclinic.kz",
    siteName: "Dental Clinic Almaty",
    locale: "ru_KZ",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Clinic Almaty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Стоматологическая клиника в Алматы",
    description: "Современная стоматология с профессиональным подходом к лечению",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <ScrollToTop />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
