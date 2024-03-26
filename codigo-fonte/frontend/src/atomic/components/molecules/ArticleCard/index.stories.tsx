import { ArticleCard } from "./index";

export default {
  title: "Molecules/ArticleCard",
  component: ArticleCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },

  args: {
    title: "Lorem",
    subtitle: "Lorem ipsum, dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/cta.png",
    slug: "www.google.com",
  },
  argTypes: {},
};

export const Default = {};
