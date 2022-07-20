import Image from "next/image";
import { logoImg } from "src/assets";
import { PageContainer, SignUpForm } from "src/components/organisms";
import styled from "styled-components";

interface SignUpProps {
  onSignUp: (email: string, password: string, nickname: string) => void;
}

const SignUp = ({ onSignUp }: SignUpProps) => {
  return (
    <PageContainer title="로그인">
      <SignUpContainer>
        <Image src={logoImg} alt="logo" width={129} height={123} priority />
        <StyledSignUpForm onSignUp={onSignUp} />
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

const StyledSignUpForm = styled(SignUpForm)`
  margin-top: 77px;
`;
