import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moon Thread Tarot",
  description: "A dreamy tarot reading experience woven from starlight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased font-sans">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
