import type { Meta, StoryObj } from "@storybook/react";
import { Box, Checkbox, CheckboxProps, Text } from "@ignite-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  label: "Checkbox",
  args: {},
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
          {Story()}
          <Text size={"sm"}>Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {};
