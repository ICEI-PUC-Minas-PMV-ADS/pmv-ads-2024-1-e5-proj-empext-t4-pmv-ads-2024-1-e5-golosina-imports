import { ProductBanner } from "./index";

export default {
  title: "Molecules/ProductBanner",
  component: ProductBanner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const dummyCharacteristics = [
  { information: "Lorem ipsum dolor sit amet" },
  { information: "Consectetur adipiscing elit" },
  { information: "Sed do eiusmod tempor incididunt" },
];

export const Default = (args: any) => (
  <ProductBanner
    productName="Product Name"
    description="Product description goes here"
    characteristics={dummyCharacteristics}
    image="/images/alfajor.jpg"
    {...args}
  />
);
