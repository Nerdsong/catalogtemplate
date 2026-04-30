import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Catalogo de Productos",
  description: "Plantilla reusable de catalogo con checkout por WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-gray-50 text-gray-900">
        <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col px-4 sm:px-6">
          <Navbar />
          <main className="flex-1 py-6">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
