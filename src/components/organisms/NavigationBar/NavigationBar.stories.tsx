import type {Meta, StoryObj} from "@storybook/react";
import {NavigationBar} from "./NavigationBar";

const meta: Meta<typeof NavigationBar> = {component: NavigationBar};
export default meta;
type Story = StoryObj<typeof NavigationBar>;
export const Primary: Story = {args: {}};
