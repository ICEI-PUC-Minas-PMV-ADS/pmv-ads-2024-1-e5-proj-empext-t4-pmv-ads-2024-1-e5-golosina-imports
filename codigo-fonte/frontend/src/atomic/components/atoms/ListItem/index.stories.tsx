import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./index";

const item = {
  title: "Atoms/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    align: "center",
    color: "dark-gray",
    children: "Title example",
    weight: "600",
    href: "www.google.com.br"
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
  },
} satisfies Meta<typeof ListItem>;

export default item;

type Story = StoryObj<typeof item>;

export const Default: Story = {
  args: {
    children: "This is a list item",
    isLink: false,
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
  },
};

export const Link: Story = {
  args: {
    children: "This is a link",
    isLink: true,
  },
};
