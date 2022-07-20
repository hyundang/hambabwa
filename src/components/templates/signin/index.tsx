import Image from "next/image";
import { logoImg } from "src/assets";
import { PageContainer, SignInForm } from "src/components/organisms";
import styled from "styled-components";

interface SignInProps {
  onSignIn: (email: string, password: string) => void;
  checked: boolean;
  onClickCheck: () => void;
}

const SignIn = ({ onSignIn, checked, onClickCheck }: SignInProps) => {
  return (
    <PageContainer title="로그인">
      <SignInContainer>
        <Image src={logoImg} alt="logo" width={129} height={123} priority />
        <StyledSignInForm
          onSignIn={onSignIn}
          checked={checked}
          onClickCheck={onClickCheck}
        />
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

const StyledSignInForm = styled(SignInForm)`
  margin-top: 77px;
`;
