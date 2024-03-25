import { BannerCTA } from "@/organisms/CTABanner";
import { Accordion } from "@/organisms/Accordion";

export default function Faq() {
  return (
    <main>
      <Accordion />
      <BannerCTA
        cta="Peça já a sua golosina importada"
        backgroundImage="images/cta.png"
      />
    </main>
  );
}
