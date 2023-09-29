import type {Meta, StoryObj} from "@storybook/react";
import {InputField} from "./InputField";

const meta: Meta<typeof InputField> = {component: InputField};
export default meta;
type Story = StoryObj<typeof InputField>;
export const Primary: Story = {args: {
    placeholder: "Hello World"
}};
