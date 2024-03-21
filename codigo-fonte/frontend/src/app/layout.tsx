import { Header } from "@/atomic/components/organisms/Header";
import { Footer } from "@/atomic/components/organisms/Footer";
import styles from "./layout.module.scss";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/main.scss";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Golosinas Imports",
  description:
    "Golosinas Imports é uma plataforma exclusiva dedicada à importação e distribuição de uma vasta gama de deliciosos alfajores argentinos para o mercado brasileiro. Nossa paixão está em trazer para os amantes de doces brasileiros a autenticidade e a qualidade incomparável dos alfajores argentinos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[poppins.className, styles.layout].join(" ")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
