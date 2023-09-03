import type {Meta, StoryObj} from "@storybook/react";
import {TopHeader} from "./TopHeader";

const meta: Meta<typeof TopHeader> = {component: TopHeader};
export default meta;
type Story = StoryObj<typeof TopHeader>;
export const Primary: Story = {args: {}};
