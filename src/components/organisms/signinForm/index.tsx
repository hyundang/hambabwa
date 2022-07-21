import { useRouter } from "next/router";
import { HTMLAttributes, useEffect, useState } from "react";
import { Button } from "src/components/atoms";
import { InputForm, CheckboxForm } from "src/components/molecules";
import { useInputForm } from "src/hooks";
import { emailCheck } from "src/utils";
import styled from "styled-components";

interface SignInFormProps extends HTMLAttributes<HTMLElement> {
  onSignIn: (email: string, password: string) => void;
  checked: boolean;
  onClickCheck: () => void;
}

const SignInForm = ({
  id,
  className,
  onSignIn,
  checked,
  onClickCheck,
}: SignInFormProps) => {
  const [{ email, password }, onChange] = useInputForm({
    email: "",
    password: "",
  });
  const [isEmailOkay, setIsEmailOkay] = useState(true);
  const checkEmailFormat = () => {
    if (!emailCheck(email)) {
      setIsEmailOkay(false);
      setIsBtnActive(false);
      return false;
    }
    return true;
  };
  const handleSignIn = () => {
    if (!checkEmailFormat()) return undefined;
    onSignIn(email, password);
    return undefined;
  };

  const router = useRouter();
  const handleSignUp = () => router.push("/signup");

  const [isBtnActive, setIsBtnActive] = useState(false);
  const checkBtnActive = () => {
    !!email && !!password ? setIsBtnActive(true) : setIsBtnActive(false);
  };
  const initializeInputError = () => {
    setIsEmailOkay(true);
  };
  useEffect(() => {
    checkBtnActive();
    initializeInputError();
  }, [email, password]);

  return (
    <SignInFormWrap id={id} className={className}>
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
      </FormWrap>
      <CheckboxForm
        checked={checked}
        onClick={onClickCheck}
        text="자동로그인"
      />
      <BottomButton>
        <StyledButton isActive={isBtnActive} onClick={handleSignIn}>
          로그인
        </StyledButton>
        <StyledButton isActive onClick={handleSignUp}>
          회원가입
        </StyledButton>
      </BottomButton>
    </SignInFormWrap>
  );
};

const SignInFormWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormWrap = styled.form`
  width: 100%;
  height: 115px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomButton = styled.div`
  width: 100%;
  height: 113px;
  margin-top: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 5px;
  font-size: 18px;
`;

export default SignInForm;
