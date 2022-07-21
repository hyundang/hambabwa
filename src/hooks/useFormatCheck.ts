import { SetStateAction, useState } from "react";
import emailCheck from "src/utils/emailCheck";

const useFormatCheck = (
  setIsBtnActive: (value: SetStateAction<boolean>) => void
) => {
  const [isEmailOkay, setIsEmailOkay] = useState(true);
  const [isPasswordOkay, setIsPasswordOkay] = useState(true);
  const [isNicknameOkay, setIsNicknameOkay] = useState(true);

  const checkEmailFormat = (email: string) => {
    if (!emailCheck(email)) {
      setIsEmailOkay(false);
      setIsBtnActive(false);
      return false;
    }
    return true;
  };
  const checkPassword = (password: string, passwordConfirm: string) => {
    if (password !== passwordConfirm) {
      setIsPasswordOkay(false);
      setIsBtnActive(false);
      return false;
    }
    return true;
  };
  const checkNickNameFormat = (nickname: string) => {
    if (nickname.length > 20) {
      setIsNicknameOkay(false);
      setIsBtnActive(false);
      return false;
    }
    return true;
  };
  const checkDataFormat = (
    email: string,
    password: string,
    passwordConfirm?: string,
    nickname?: string
  ) => {
    const a = checkEmailFormat(email);
    if (passwordConfirm && nickname) {
      const b = checkPassword(password, passwordConfirm);
      const c = checkNickNameFormat(nickname);
      return a && b && c;
    }
    return a;
  };

  const initializeInputState = () => {
    setIsEmailOkay(true);
    setIsPasswordOkay(true);
    setIsNicknameOkay(true);
  };

  return {
    isEmailOkay,
    isPasswordOkay,
    isNicknameOkay,
    checkDataFormat,
    initializeInputState,
  };
};

export default useFormatCheck;
