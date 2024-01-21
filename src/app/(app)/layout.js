export const metadata = {
  title: 'Seelinks',
  description: 'Links at one place',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
