import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ModalContainerProps extends HTMLAttributes<HTMLDivElement> {
  setIsOpen: (value: boolean) => void;
  isBlack?: boolean;
}
const ModalContainer = ({
  id,
  className,
  style,
  children,
  setIsOpen,
  isBlack = false,
}: ModalContainerProps) => {
  return (
    <>
      <Background onClick={() => setIsOpen(false)} isBlack={isBlack} />
      <ModalWrap id={id} className={className} style={style}>
        {children}
      </ModalWrap>
    </>
  );
};

export default ModalContainer;

interface BackgroundProps {
  isBlack: boolean;
}
const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: ${({ isBlack }) =>
    isBlack ? "rgba(0, 0, 0, 0.3)" : "none"};
`;

const ModalWrap = styled.div`
  width: fit-content;
  height: fit-content;
  position: fixed;
  z-index: 6;
`;
