import { ComponentMeta, ComponentStory } from "@storybook/react";
import WriteComment from ".";

export default {
  title: "components/organisms/WriteComment",
  component: WriteComment,
  decorators: [
    (story) => <div style={{ width: "340px", height: "884px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof WriteComment>;

const Template: ComponentStory<typeof WriteComment> = (args) => (
  <WriteComment {...args} />
);

export const DefaultWriteComment = Template.bind({});
DefaultWriteComment.args = {
  onChangeScore: () => "hi",
};
