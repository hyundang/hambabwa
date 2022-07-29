import { ComponentMeta, ComponentStory } from "@storybook/react";
import AddComment from ".";

export default {
  title: "components/templates/AddComment",
  component: AddComment,
  decorators: [
    (story) => <div style={{ width: "390px", height: "884px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = (args) => (
  <AddComment {...args} />
);

export const DefaultAddComment = Template.bind({});
DefaultAddComment.args = {
  onChangeScore: () => "hi",
  score: 4,
};
