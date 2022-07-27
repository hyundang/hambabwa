import { ComponentMeta, ComponentStory } from "@storybook/react";
import Like from ".";

export default {
  title: "components/atoms/Like",
  component: Like,
  decorators: [
    (story) => <div style={{ width: "28px", height: "28px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />;

export const DefaultLike = Template.bind({});
DefaultLike.args = {
  initState: false,
  onClickLike: () => "hi",
  size: 28,
};
