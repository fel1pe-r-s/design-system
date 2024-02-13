import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  tags: ["autodocs"],
  label: "TextArea",
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$2",
          }}
        >
          <Text>Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

type Story = StoryObj<TextAreaProps>;

export const Primary: Story = {
  args: {
    placeholder: "Add any observation",
  },
};

export const Disable: Story = {
  args: {
    disabled: true,
  },
};
