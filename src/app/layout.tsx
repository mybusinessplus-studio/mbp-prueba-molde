import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { sitio } from "@/lib/sitio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: { default: sitio.nombre, template: `%s · ${sitio.nombre}` },
  description: sitio.descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: sitio.nombre,
    title: sitio.nombre,
    description: sitio.descripcion,
    locale: sitio.locale,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={sitio.idioma}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:outline focus:outline-2"
        >
          Saltar al contenido
        </a>
        <JsonLd
          datos={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: sitio.organizacion.nombre,
            url: sitio.url,
            logo: new URL(sitio.organizacion.logo, sitio.url).toString(),
          }}
        />
        {children}
      </body>
    </html>
  );
}
