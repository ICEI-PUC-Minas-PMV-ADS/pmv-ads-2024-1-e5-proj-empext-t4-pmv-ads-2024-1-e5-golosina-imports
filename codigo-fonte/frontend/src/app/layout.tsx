import type { Viewport } from 'next'
import { Header } from "@/atomic/components/organisms/Header";
import { Footer } from "@/atomic/components/organisms/Footer";
import styles from "./layout.module.scss";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/main.scss";
import { auth } from "@/auth";

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
    icons: {
      icon: 'images/favicon-32x32.png'
    }
};

export const viewport: Viewport = {
  themeColor: '#9D5C63',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;

  return (
    <html lang="en">
      <body className={[poppins.className, styles.layout].join(" ")}>
        <Header user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
