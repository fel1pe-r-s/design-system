import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, similique tenetur sit, voluptate distinctio corporis in inventore facilis provident dolor expedita accusantium saepe laboriosam, deserunt voluptas nihil officiis aspernatur.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
