import type { Meta, StoryObj } from "@storybook/vue3";
import IpInputVue from "../package/IpInput/IpInput";

const meta = {
  title: "Ip/input",
  component: IpInputVue as any,
  tags: ["autodocs"],
  argTypes: {},
  args: { primary: false }, // default value
} satisfies Meta<typeof IpInputVue>;
export default meta;
type Story = StoryObj<typeof meta>;

export const IpInput: Story = {};
