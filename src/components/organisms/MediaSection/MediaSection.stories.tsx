import type {Meta, StoryObj} from "@storybook/react";
import {MediaSection} from "./MediaSection";

const meta: Meta<typeof MediaSection> = {component: MediaSection};
export default meta;
type Story = StoryObj<typeof MediaSection>;
export const Primary: Story = {args: {}};
