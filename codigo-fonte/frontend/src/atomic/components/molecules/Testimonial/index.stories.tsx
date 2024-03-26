import { Testimonial } from "./index";

export default {
  title: "Molecules/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark-mode" },
  },

  args: {
    name: "Lorem",
    location: "Lorem ipsum, dolor",
    rate: "4.5",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/cta.png",
  },
  argTypes: {},
};

export const Default = {};
