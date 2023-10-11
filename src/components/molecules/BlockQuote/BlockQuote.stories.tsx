import type { Meta, StoryObj } from "@storybook/react";
import { BlockQuote } from "./BlockQuote";

const meta: Meta<typeof BlockQuote> = { component: BlockQuote };
export default meta;
type Story = StoryObj<typeof BlockQuote>;
export const Primary: Story = {
  args: {
    children: "The details are not the details. They make the design.",
  },
};
