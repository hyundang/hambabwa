import { useRecoilState } from "recoil";
import ToastMsgState from "src/modules/states";

const useToastMsg = (
  key: "signupError" | "signinError" | "copyToClipboard"
) => {
  const [isToastMsgActive, setIsToastMsgActive] = useRecoilState(ToastMsgState);
  const handleToastMsg = (e:boolean) =>
    setIsToastMsgActive({
      ...isToastMsgActive,
      [key]: e,
    });
  return { isToastMsgActive, handleToastMsg };
};

export default useToastMsg;
