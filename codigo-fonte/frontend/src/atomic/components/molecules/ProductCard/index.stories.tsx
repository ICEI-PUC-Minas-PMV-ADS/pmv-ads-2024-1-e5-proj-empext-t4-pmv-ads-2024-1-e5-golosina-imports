import { ProductCard } from "./index";

export default {
  title: "Molecules/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },

  args: {
    title: "Lorem",
    price: "Lorem",
    backgroundImage: "/images/alfajor.jpg",
    slug: "www.google.com",
  },
  argTypes: {},
};

export const Default = {};
