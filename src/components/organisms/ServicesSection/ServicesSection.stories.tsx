import type {Meta, StoryObj} from "@storybook/react";
import {ServicesSection} from "./ServicesSection";

const meta: Meta<typeof ServicesSection> = {component: ServicesSection};
export default meta;
type Story = StoryObj<typeof ServicesSection>;
export const Primary: Story = {args: {}};
