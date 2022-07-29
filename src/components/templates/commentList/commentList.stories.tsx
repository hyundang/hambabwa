import { ComponentMeta, ComponentStory } from "@storybook/react";
import { restaurantData, userData } from "src/mocks/data";
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

const DefaultTemplate: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args}>
    <CommentList.TotalScore totalScore={4.5} />
    <CommentList.DefaultComments nickname="" />
  </CommentList>
);
export const DefaultCommentList = DefaultTemplate.bind({});
DefaultCommentList.args = {
  comments: restaurantData.getComments,
};

const DetailTemplate: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args}>
    <CommentList.TotalScore totalScore={4.5} displayTotalCount />
    <CommentList.DefaultComments nickname="김지원" />
  </CommentList>
);
export const CommentListWithTotalCount = DetailTemplate.bind({});
CommentListWithTotalCount.args = {
  comments: restaurantData.getComments,
};

const MypageTemplate: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args}>
    <CommentList.TotalCount />
    <CommentList.MyComments />
  </CommentList>
);
export const MyCommentList = MypageTemplate.bind({});
MyCommentList.args = {
  comments: userData.getMyComments,
};
