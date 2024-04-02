'use client'
import {
  ContactForm,
  FormProps,
  SubjectEnum,
} from "@/organisms/ContactForm";
import { Testimonials } from "@/organisms/Testimonials";

export default function Contact() {
  const formData: FormProps = {
    name: "Seu Nome",
    email: "seu@email.com",
    subject: SubjectEnum.feedback,
    message: "Sua mensagem aqui",
  };
  return (
    <main>
      <ContactForm formData={formData} />
      <Testimonials />
    </main>
  );
}
