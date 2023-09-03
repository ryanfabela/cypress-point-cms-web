import type {Meta, StoryObj} from "@storybook/react";
import {ImageCard} from "./ImageCard";

const meta: Meta<typeof ImageCard> = {component: ImageCard};
export default meta;
type Story = StoryObj<typeof ImageCard>;
export const Primary: Story = {args: {}};
