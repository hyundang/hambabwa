import { ComponentMeta } from "@storybook/react";
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

export const DefaultComment = () => (
  <Comment comment={restaurantData.getComments[0]}>
    <Comment.DefaultProfileImg />
  </Comment>
);

export const MyComment = () => (
  <Comment comment={restaurantData.getComments[0]}>
    <Comment.MyProfileImg />
    <Comment.Menu onClickDelete={() => "hi"} />
  </Comment>
);

export const MyPageComment = () => (
  <Comment comment={restaurantData.getComments[0]}>
    <Comment.Menu onClickDelete={() => "hi"} />
  </Comment>
);
