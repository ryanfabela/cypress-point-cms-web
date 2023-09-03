import type {Meta, StoryObj} from "@storybook/react";
import {MediaCard} from "./MediaCard";

const meta: Meta<typeof MediaCard> = {component: MediaCard};
export default meta;
type Story = StoryObj<typeof MediaCard>;
export const Primary: Story = {args: {}};
