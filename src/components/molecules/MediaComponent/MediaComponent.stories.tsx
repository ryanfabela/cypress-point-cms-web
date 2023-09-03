import type {Meta, StoryObj} from "@storybook/react";
import {MediaComponent} from "./MediaComponent";

const meta: Meta<typeof MediaComponent> = {component: MediaComponent};
export default meta;
type Story = StoryObj<typeof MediaComponent>;
export const Primary: Story = {args: {}};
