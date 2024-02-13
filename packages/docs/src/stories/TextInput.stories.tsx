import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  tags: ["autodocs"],
  label: "TextInput",
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
} as Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export const Primary: Story = {
  args: {
    placeholder: "Type your name",
  },
};

export const Disable: Story = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: "cal.com/",
  },
};
