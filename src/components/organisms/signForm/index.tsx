import { useRouter } from "next/router";
import {
  ChangeEvent,
  createContext,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { Button } from "src/components/atoms";
import { InputForm } from "src/components/molecules";
import { useFormatCheck, useInputForm } from "src/hooks";
import { authTypes } from "src/types";
import styled from "styled-components";

interface ContextProps {
  id: string | undefined;
  className: string | undefined;
  type: "signin" | "signup";
  handleSubmit: () => void;
  isEmailOkay: boolean;
  isPasswordOkay: boolean;
  isNicknameOkay: boolean;
  isBtnActive: boolean;
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SignFormContext = createContext<ContextProps>({
  id: undefined,
  className: undefined,
  type: "signin",
  handleSubmit: () => undefined,
  isEmailOkay: false,
  isPasswordOkay: false,
  isNicknameOkay: false,
  isBtnActive: false,
  email: "",
  password: "",
  passwordConfirm: "",
  nickname: "",
  onChange: (e: ChangeEvent<HTMLInputElement>) => undefined,
});
SignFormContext.displayName = "SignFormContext";

interface SignInFormProps extends HTMLAttributes<HTMLElement> {
  onClickBtn: (
    params: authTypes.postSignInReqProps | authTypes.postSignUpReqProps
  ) => void;
  type: "signin" | "signup";
}
const SignForm = ({
  id,
  className,
  children,
  type,
  onClickBtn,
}: SignInFormProps) => {
  const {
    form: { email, password, passwordConfirm, nickname },
    onChange,
  } = useInputForm({
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });

  const [isBtnActive, setIsBtnActive] = useState(false);
  const {
    isEmailOkay,
    isPasswordOkay,
    isNicknameOkay,
    checkDataFormat,
    initializeInputState,
  } = useFormatCheck(setIsBtnActive);

  const checkBtnActive = () => {
    if (type === "signin")
      !!email && !!password ? setIsBtnActive(true) : setIsBtnActive(false);
    else
      !!email && !!password && !!passwordConfirm && !!nickname
        ? setIsBtnActive(true)
        : setIsBtnActive(false);
  };

  const handleSubmit = () => {
    if (type === "signin") {
      if (!checkDataFormat(email, password)) return undefined;
      onClickBtn({ email, password });
    } else {
      if (!checkDataFormat(email, password, passwordConfirm, nickname))
        return undefined;
      onClickBtn({ email, password, nickname });
    }
    return undefined;
  };

  useEffect(() => {
    checkBtnActive();
    initializeInputState();
  }, [email, password, passwordConfirm, nickname]);

  const value = useMemo(
    () => ({
      id,
      className,
      type,
      handleSubmit,
      isEmailOkay,
      isPasswordOkay,
      isNicknameOkay,
      isBtnActive,
      email,
      password,
      passwordConfirm,
      nickname,
      onChange,
    }),
    [
      type,
      email,
      password,
      passwordConfirm,
      nickname,
      isEmailOkay,
      isPasswordOkay,
      isNicknameOkay,
      isBtnActive,
    ]
  );

  return (
    <SignFormContext.Provider value={value}>
      {children}
    </SignFormContext.Provider>
  );
};

const useSignForm = () => {
  const context = useContext(SignFormContext);
  if (context === undefined)
    throw new Error("useToggle must be used within a SignForm");
  return context;
};

const InputEmail = () => {
  const { isEmailOkay, email, onChange } = useSignForm();
  return (
    <StyledInputForm
      name="email"
      type="email"
      placeholder="이메일"
      value={email}
      onChange={onChange}
      isError={!isEmailOkay}
      errorMsg="잘못된 이메일 형식입니다."
    />
  );
};

const InputPassword = () => {
  const { password, onChange } = useSignForm();
  return (
    <StyledInputForm
      name="password"
      type="password"
      placeholder="비밀번호"
      value={password}
      onChange={onChange}
      isError={false}
    />
  );
};

const InputPasswordConfirm = () => {
  const { isPasswordOkay, passwordConfirm, onChange } = useSignForm();
  return (
    <StyledInputForm
      name="passwordConfirm"
      type="password"
      placeholder="비밀번호 확인"
      value={passwordConfirm}
      onChange={onChange}
      isError={!isPasswordOkay}
      errorMsg="비밀번호가 같지 않습니다."
    />
  );
};

const InputNickName = () => {
  const { isNicknameOkay, nickname, onChange } = useSignForm();
  return (
    <StyledInputForm
      name="nickname"
      type="text"
      placeholder="닉네임"
      value={nickname}
      onChange={onChange}
      isError={!isNicknameOkay}
      errorMsg="닉네임은 최대 20자까지 가능합니다."
    />
  );
};

const StyledInputForm = styled(InputForm)`
  height: 30px;
  font-size: 15px;
  .input {
    font-size: 15px;
    height: 30px;
  }
`;

const ButtonLogin = () => {
  const { handleSubmit, isBtnActive } = useSignForm();
  return (
    <StyledButton isActive={isBtnActive} onClick={handleSubmit}>
      로그인
    </StyledButton>
  );
};

const ButtonSignup = () => {
  const { type, handleSubmit, isBtnActive } = useSignForm();
  const router = useRouter();
  const handleSignUp = () => router.push("/signup");
  return type === "signup" ? (
    <StyledButton isActive={isBtnActive} onClick={handleSubmit}>
      회원가입
    </StyledButton>
  ) : (
    <StyledButton isActive onClick={handleSignUp}>
      회원가입
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
`;

export default SignForm;

SignForm.InputEmail = InputEmail;
SignForm.InputPassword = InputPassword;
SignForm.InputPasswordConfirm = InputPasswordConfirm;
SignForm.InputNickName = InputNickName;
SignForm.ButtonLogin = ButtonLogin;
SignForm.ButtonSignup = ButtonSignup;
