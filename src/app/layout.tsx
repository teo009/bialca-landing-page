import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIALCA | Ingeniería Civil, Diseño 3D y Simulación BIM de Alta Precisión",
  description: "Estudio premium de ingeniería civil, modelado paramétrico 3D y consultoría BIM. Transformamos visiones arquitectónicas complejas en proyectos ejecutables con precisión digital absoluta de nivel LOD 400.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-surface text-on-surface font-sans selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  );
}
