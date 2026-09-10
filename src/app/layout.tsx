import type { Metadata } from 'next'
import { Providers } from './providers'
import "@/index.css"

export const metadata: Metadata = {
  title: 'Nieves — Artista Visual Venezolana | Arte Contemporáneo',
  description: 'Portafolio oficial de Nieves, artista plástica venezolana. Obra contemporánea, exposiciones y contacto para coleccionistas y galerías.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nieves",
          "jobTitle": "Artista Visual",
          "nationality": "Venezolana",
          "url": "https://nieves.vercel.app",
          "image": "https://nieves.vercel.app/logo-nieves.png",
          "knowsAbout": ["Arte Contemporáneo", "Pintura al Óleo", "Pintura Acrílica", "Surrealismo"],
          "sameAs": [
            "https://www.instagram.com/lisettnievesart",
            "https://www.tiktok.com/@artnieveslis",
            "https://www.youtube.com/@artesnieves"
          ]
        }) }} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
