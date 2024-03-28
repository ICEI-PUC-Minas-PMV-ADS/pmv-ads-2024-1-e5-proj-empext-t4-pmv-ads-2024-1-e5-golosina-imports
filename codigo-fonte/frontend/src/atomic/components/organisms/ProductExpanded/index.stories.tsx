import { ProductExpanded } from "./index";

export default {
  title: "Organisms/ProductExpanded",
  component: ProductExpanded,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    product: "Alfajor Argentino",
    productType: "Doce",
    price: "2.50",
    description: "Delicioso alfajor argentino com recheio de doce de leite.",
    image: "/images/alfajor.jpg",
    characteristics: [
      { information: "Feito com ingredientes frescos e naturais." },
      { information: "Recheio cremoso de doce de leite." },
      { information: "Cobertura de chocolate de alta qualidade." },
    ],
  },
  argTypes: {},
};

export const Default = {};
