import type {Meta, StoryObj} from "@storybook/react";
import {CopyRightBar} from "./CopyRightBar";

const meta: Meta<typeof CopyRightBar> = {component: CopyRightBar};
export default meta;
type Story = StoryObj<typeof CopyRightBar>;
export const Primary: Story = {args: {}};
