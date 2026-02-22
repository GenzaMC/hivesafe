import "./globals.css"
import Navbar from "./components/layout/Navbar"
import Providers from "./providers"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "HiveSafe",
  description: "The Family-Friendly Minecraft Whitelist Server",
  icons: {
    icon: "/icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}