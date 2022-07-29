import { atom } from "recoil";
import { restaurantTypes, statesTypes } from "src/types";

const ToastMsgState = atom<statesTypes.ToastMsgStateProps>({
  key: "TOASTMSG",
  default: {
    signinError: false,
    signupError: false,
    copyToClipboard: false,
  },
});

const RestaurantInfoState = atom<restaurantTypes.restaurantProps | null>({
  key: "RESTAURANT_INFO",
  default: null,
});

const CommentScoreState = atom<number>({
  key: "COMMENT_SCORE",
  default: 0,
});

const CommentState = atom<restaurantTypes.menuCommentProps | null>({
  key: "COMMENT",
  default: null,
});

const states = {
  ToastMsgState,
  RestaurantInfoState,
  CommentScoreState,
  CommentState,
};
export default states;
