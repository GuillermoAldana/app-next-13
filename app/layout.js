import { Navigation } from './components/Navigation'
import { font } from './font.js'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My app with Next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
