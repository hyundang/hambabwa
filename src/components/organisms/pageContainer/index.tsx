import styled from "styled-components";
import { Header } from "src/components/molecules";
import { HTMLAttributes } from "react";

interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  title: string;
  isBackActive?: boolean;
  onClickBack?: () => void;
}

const PageContainer = ({
  title,
  children,
  isBackActive,
  style,
  onClickBack,
}: PageContainerProps) => {
  return (
    <>
      <StyledHeader
        title={title}
        isBackActive={isBackActive}
        onClickBack={onClickBack}
      />
      <Container style={style}>{children}</Container>
    </>
  );
};

export default PageContainer;

const StyledHeader = styled(Header)`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 33px;
  padding-bottom: 80px;
  overflow-y: scroll;
`;
