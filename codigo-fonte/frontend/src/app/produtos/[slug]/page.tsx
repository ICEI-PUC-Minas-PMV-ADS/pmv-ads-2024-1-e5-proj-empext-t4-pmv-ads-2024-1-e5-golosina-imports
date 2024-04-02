import { Testimonials } from "@/organisms/Testimonials";

export default function Product({ params }: { params: { slug: string } }) {
  return (
    <main>
      <Testimonials />
    </main>
  );
}
