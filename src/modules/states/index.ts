import { atom } from "recoil";
import { statesTypes } from "src/types";

const ToastMsgState = atom<statesTypes.ToastMsgStateProps>({
  key: "TOASTMSG",
  default: {
    signinError: false,
    signupError: false,
    copyToClipboard: false,
  },
});

export default ToastMsgState;
