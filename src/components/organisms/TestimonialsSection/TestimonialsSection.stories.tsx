import type {Meta, StoryObj} from "@storybook/react";
import {TestimonialsSection,} from "./TestimonialsSection";

const meta: Meta<typeof TestimonialsSection> = {
    component: TestimonialsSection,
};
export default meta;
type Story = StoryObj<typeof TestimonialsSection>;
export const Primary: Story = {args: {}};
