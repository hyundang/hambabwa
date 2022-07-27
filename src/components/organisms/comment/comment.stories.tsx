import { ComponentMeta, ComponentStory } from "@storybook/react";
import { restaurantData } from "src/mocks/data";
import Comment from ".";

export default {
  title: "components/organisms/Comment",
  component: Comment,
  decorators: [
    (story) => <div style={{ width: "340px", height: "116px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

export const DefaultComment = Template.bind({});
DefaultComment.args = {
  comment: restaurantData.getComments[0],
};
