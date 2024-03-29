import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@ignite-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  label: "Heading",
  primary: true,
} as Meta<HeadingProps>;

type Story = StoryObj<HeadingProps>;

export const Primary: Story = {
  args: {
    children: "Custom Title",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o heading sempre será um 'h2'",
      },
    },
  },
};
export const CustomTag: Story = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
};
