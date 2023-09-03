import type {Meta, StoryObj} from "@storybook/react";
import {IconCard} from "./IconCard";

const meta: Meta<typeof IconCard> = {component: IconCard};
export default meta;
type Story = StoryObj<typeof IconCard>;
export const Primary: Story = {args: {}};
