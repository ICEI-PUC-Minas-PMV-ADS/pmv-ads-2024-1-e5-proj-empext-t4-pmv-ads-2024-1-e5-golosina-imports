import { BannerCTA } from "@/organisms/CTABanner";

export default function Article({ params }: { params: { slug: string } }) {
  return (
    <main>
      <BannerCTA
        cta="Peça já a sua golosina importada"
        backgroundImage="/images/cta3.jpg"
      />
    </main>
  );
}
