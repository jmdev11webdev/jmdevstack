import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JMDevStack",
  description: "Full stack development made easy with JMDevStack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Sans font usage from google chrome */}
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />

        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"></link>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
