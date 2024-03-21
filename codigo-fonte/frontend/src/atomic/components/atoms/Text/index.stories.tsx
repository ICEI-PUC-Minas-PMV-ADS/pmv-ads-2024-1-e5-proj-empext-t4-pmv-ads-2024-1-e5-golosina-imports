import { Text } from "./index";

export default {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    align: "center",
    color: "dark-gray",
    children: "Text example",
    weight: "600",
    lineHeight: "",
    letterSpacing: "",
  },
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["right", "center", "left"],
    },
    color: {
      control: { type: "select" },
      options: [
        "wenge",
        "rose-taupe",
        "lavender-web",
        "light-blue",
        "dark-gray",
        "light-gray",
        "white",
        "seashell",
        "desert-sand",
      ],
    },
    lineHeight: {
      control: { type: "inline-radio" },
      options: ["3rem", "4.4rem"],
    },
    letterSpacing: {
      control: { type: "inline-radio" },
      options: ["0.05rem", "0.015rem"],
    },
  },
};

export const Default = {};
