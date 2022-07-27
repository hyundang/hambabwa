import { ComponentMeta, ComponentStory } from "@storybook/react";
import AskComment from ".";

export default {
  title: "components/organisms/AskComment",
  component: AskComment,
  decorators: [
    (story) => <div style={{ width: "340px", height: "116px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof AskComment>;

const Template: ComponentStory<typeof AskComment> = (args) => (
  <AskComment {...args} />
);

export const DefaultAskComment = Template.bind({});
DefaultAskComment.args = {
  onChangeScore: () => "hi",
  nickname: "함바",
};
