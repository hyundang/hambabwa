import { ComponentMeta, ComponentStory } from "@storybook/react";
import { restaurantData } from "src/mocks/data";
import CommentDetail from ".";

export default {
  title: "components/templates/CommentDetail",
  component: CommentDetail,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof CommentDetail>;

const Template: ComponentStory<typeof CommentDetail> = (args) => (
  <CommentDetail {...args} />
);

export const DefaultCommentDetail = Template.bind({});
DefaultCommentDetail.args = {
  comments: restaurantData.getComments,
  totalScore: 4.5,
};
