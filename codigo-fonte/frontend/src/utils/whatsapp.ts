const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export const handleWhatsappClick = (productName: string) => {
  const message = productName
    ? `Olá, estou interessado no produto ${productName}`
    : "Olá, estou interessado em um produto.";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
