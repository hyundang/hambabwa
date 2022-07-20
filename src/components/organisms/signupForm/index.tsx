import { useRouter } from "next/router";
import { HTMLAttributes, useEffect, useState } from "react";
import { Button } from "src/components/atoms";
import { InputForm, CheckboxForm } from "src/components/molecules";
import { useInputForm } from "src/hooks";
import { emailCheck } from "src/utils";
import styled from "styled-components";

interface SignUpFormProps extends HTMLAttributes<HTMLElement> {
  onSignUp: (email: string, password: string, nickname: string) => void;
}

const SignUpForm = ({ id, className, onSignUp }: SignUpFormProps) => {
  const [{ email, password, passwordConfirm, nickname }, onChange] =
    useInputForm({
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
    });
  const [isEmailOkay, setIsEmailOkay] = useState(true);
  const [isPasswordOkay, setIsPasswordOkay] = useState(true);
  const [isNicknameOkay, setIsNicknameOkay] = useState(true);
  const handleError = () => {
    if (password !== passwordConfirm) {
      setIsPasswordOkay(false);
      setIsBtnActive(false);
      return false;
    }
    if (nickname.length > 20) {
      setIsNicknameOkay(false);
      setIsBtnActive(false);
      return false;
    }
    if (!emailCheck(email)) {
      setIsEmailOkay(false);
      setIsBtnActive(false);
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (!handleError()) return undefined;
    onSignUp(email, password, nickname);
    return undefined;
  };

  const [isBtnActive, setIsBtnActive] = useState(false);
  const checkBtnActive = () => {
    !!email && !!password && !!passwordConfirm && !!nickname
      ? setIsBtnActive(true)
      : setIsBtnActive(false);
  };
  const initializeInputError = () => {
    setIsEmailOkay(true);
    setIsPasswordOkay(true);
    setIsNicknameOkay(true);
  };
  useEffect(() => {
    checkBtnActive();
    initializeInputError();
  }, [email, password, passwordConfirm, nickname]);

  return (
    <SignUpFormWrap id={id} className={className}>
      <FormWrap>
        <StyledInputForm
          name="email"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={onChange}
          isError={!isEmailOkay}
          errorMsg="잘못된 이메일 형식입니다."
        />
        <StyledInputForm
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
          isError={false}
        />
        <StyledInputForm
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={onChange}
          isError={!isPasswordOkay}
          errorMsg="비밀번호가 같지 않습니다."
        />
        <StyledInputForm
          name="nickname"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={onChange}
          isError={!isNicknameOkay}
          errorMsg="닉네임은 최대 20자까지 가능합니다."
        />
      </FormWrap>
      <StyledButton isActive={isBtnActive} onClick={handleSignUp}>
        회원가입
      </StyledButton>
    </SignUpFormWrap>
  );
};

const SignUpFormWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormWrap = styled.form`
  width: 100%;
  height: 203px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInputForm = styled(InputForm)`
  height: 30px;
  font-size: 15px;
  .input {
    font-size: 15px;
  }
`;

const StyledButton = styled(Button)`
  height: 50px;
  margin-top: 37px;
  border-radius: 5px;
  font-size: 18px;
`;

export default SignUpForm;
