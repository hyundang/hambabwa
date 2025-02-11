import Image from "next/image";
import { logoImg } from "src/assets";
import { PageContainer, SignForm } from "src/components/organisms";
import { authTypes } from "src/types";
import styled from "styled-components";

interface SignUpProps {
  onSignUp: (
    params: authTypes.postSignUpReqProps | authTypes.postSignInReqProps
  ) => void;
}

const SignUp = ({ onSignUp }: SignUpProps) => {
  return (
    <PageContainer title="회원가입" isBackActive>
      <SignUpContainer>
        <Image src={logoImg} alt="logo" width={129} height={123} priority />
        <SignForm type="signup" onClickBtn={onSignUp}>
          <SignUpFormWrap>
            <FormWrap>
              <SignForm.InputEmail />
              <SignForm.InputPassword />
              <SignForm.InputPasswordConfirm />
              <SignForm.InputNickName />
            </FormWrap>
            <SignForm.ButtonSignup />
          </SignUpFormWrap>
        </SignForm>
      </SignUpContainer>
    </PageContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpFormWrap = styled.section`
  width: 100%;
  margin-top: 77px;
  display: flex;
  flex-direction: column;
`;

const FormWrap = styled.form`
  width: 100%;
  height: 203px;
  margin-bottom: 37px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
