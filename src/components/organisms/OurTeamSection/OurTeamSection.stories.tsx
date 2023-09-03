import type {Meta, StoryObj} from "@storybook/react";
import {OurTeamSection} from "./OurTeamSection";

const meta: Meta<typeof OurTeamSection> = {component: OurTeamSection};
export default meta;
type Story = StoryObj<typeof OurTeamSection>;
export const Primary: Story = {args: {}};
