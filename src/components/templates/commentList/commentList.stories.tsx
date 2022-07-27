import { ComponentMeta, ComponentStory } from "@storybook/react";
import { restaurantData } from "src/mocks/data";
import CommentList from ".";

export default {
  title: "components/templates/CommentList",
  component: CommentList,
  decorators: [(story) => <div style={{ width: "100%" }}>{story()}</div>],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof CommentList>;
 
const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const DefaultCommentList = Template.bind({});
DefaultCommentList.args = {
  totalScore: 4.5,
  comments: restaurantData.getComments,
};
