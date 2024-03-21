import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const button = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Lorem ipsum",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    aria: {
      table: {
        disable: true,
      },
    },
    role: {
      table: {
        disable: true,
      },
    },
    tabIndex: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default button;

type Story = StoryObj<typeof button>;

export const Primary: Story = {
  args: {
    level: "primary",
    isButton: true,
  },
};
export const Secondary: Story = {
  args: {
    level: "secondary",
    isButton: true,
  },
};
export const Tertiary: Story = {
  args: {
    level: "tertiary",
    isButton: true,
  },
};
export const Quaternary: Story = {
  args: {
    level: "quaternary",
    isButton: true,
  },
};
export const Link: Story = {
  args: {
    isButton: false,
    weight: "600",
  },
  argTypes: {
    level: {
      table: {
        disable: true,
      },
    },
    isButton: {
      table: {
        disable: true,
      },
    },
  },
};
