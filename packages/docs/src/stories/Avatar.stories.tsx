import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  label: "Avatar",
  primary: true,
  args: {
    src: "https://github.com/fel1pe-r-s.png",
    alt: "Felipe Rodrigues",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

type Story = StoryObj<AvatarProps>;

export const Primary: Story = {};
export const WithFallback: Story = {
  args: {
    src: undefined,
  },
};
