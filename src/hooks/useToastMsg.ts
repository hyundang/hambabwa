import { useRecoilState } from "recoil";
import states from "src/modules/states";

const useToastMsg = (
  key: "signupError" | "signinError" | "copyToClipboard"
) => {
  const [isToastMsgActive, setIsToastMsgActive] = useRecoilState(
    states.ToastMsgState
  );
  const handleToastMsg = (e: boolean) =>
    setIsToastMsgActive({
      ...isToastMsgActive,
      [key]: e,
    });
  return { isToastMsgActive, handleToastMsg };
};

export default useToastMsg;
