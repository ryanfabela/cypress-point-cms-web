import type { Meta, StoryObj } from "@storybook/react";
import { Headings } from "./Headings";

const meta: Meta<typeof Headings> = { component: Headings };
export default meta;
type Story = StoryObj<typeof Headings>;
export const Primary: Story = {
  args: {
    children: "Headings",
    as: "h1",
  },
};
