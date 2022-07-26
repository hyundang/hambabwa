import Image from "next/image";
import { logoImg } from "src/assets";
import { PageContainer, SignForm } from "src/components/organisms";
import { authTypes } from "src/types";
import styled from "styled-components";

interface SignInProps {
  onSignIn: (params: authTypes.postSignInReqProps) => void;
}

const SignIn = ({ onSignIn }: SignInProps) => {
  return (
    <PageContainer title="로그인">
      <SignInContainer>
        <Image src={logoImg} alt="logo" width={129} height={123} priority />
        <SignForm type="signin" onClickBtn={onSignIn}>
          <SignInFormWrap>
            <FormWrap>
              <SignForm.InputEmail />
              <SignForm.InputPassword />
            </FormWrap>
          </SignInFormWrap>
          <BottomButton>
            <SignForm.ButtonLogin />
            <SignForm.ButtonSignup />
          </BottomButton>
        </SignForm>
      </SignInContainer>
    </PageContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignInFormWrap = styled.section`
  width: 100%;
  margin-top: 77px;
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
