import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Golosinas Imports",
    short_name: "Golosinas",
    description:
      "Golosinas Imports é uma plataforma exclusiva dedicada à importação e distribuição de uma vasta gama de deliciosos alfajores argentinos para o mercado brasileiro. Nossa paixão está em trazer para os amantes de doces brasileiros a autenticidade e a qualidade incomparável dos alfajores argentinos",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFB",
    theme_color: "#9D5C63",
    icons: [
      {
        src: "/images/pwa/p.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/pwa/m.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/pwa/g.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
