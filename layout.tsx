import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoveniersbedrijf John Klaassen | Compleet voor uw tuin",
  description: "Hoveniersbedrijf in Gilze en omgeving voor tuinaanleg, onderhoud, advies en projecten.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
