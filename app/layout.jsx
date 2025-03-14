import './globals.css'

export const metadata = {
  title: 'PlatinoDrop - Dropshipping su eBay semplificato',
  description: 'PlatinoDrop è la piattaforma leader per il dropshipping su eBay da AliExpress e Amazon. Automatizza la gestione dei fornitori, sincronizza l inventario e mon...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
