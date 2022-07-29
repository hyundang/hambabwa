import { ComponentMeta } from "@storybook/react";
import { restaurantData, userData } from "src/mocks/data";
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

export const DefaultComment = () => (
  <Comment comment={restaurantData.getComments[0]}>
    <Comment.DefaultProfileImg />
    <Comment.DefaultContent />
  </Comment>
);

export const MyComment = () => (
  <Comment comment={restaurantData.getComments[0]}>
    <Comment.MyProfileImg />
    <Comment.Menu onClickDelete={() => "hi"} />
    <Comment.DefaultContent />
  </Comment>
);

export const MyPageComment = () => (
  <Comment comment={userData.getMyComment}>
    <Comment.Menu onClickDelete={() => "hi"} />
    <Comment.MyContent />
  </Comment>
);
