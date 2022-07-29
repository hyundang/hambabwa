import { useEffect } from "react";
import toastmsgAnimation from "src/components/animation";
import styled from "styled-components";

interface ToastMsgProps {
  text: string;
  isActive: boolean;
  setIsActive: (e: boolean) => void;
  isError?: boolean;
}
const ToastMsg = ({
  text,
  isActive,
  setIsActive,
  isError = false,
}: ToastMsgProps) => {
  useEffect(() => {
    isActive && setTimeout(() => setIsActive(false), 3000);
  }, [isActive]);

  return (
    <ToastMsgWrap isActive={isActive} isError={isError}>
      {text}
    </ToastMsgWrap>
  );
};

export default ToastMsg;

interface ToastMsgWrapProps {
  isActive: boolean;
  isError: boolean;
}
const ToastMsgWrap = styled.dialog<ToastMsgWrapProps>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  padding: 0 32px;
  width: fit-content;
  height: 59px;
  border-radius: 29.5px;
  font-size: 13px;
  font-weight: 500;
  background: var(--white);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.28);

  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  opacity: 0;
  animation: ${({ isError }) =>
    isError
      ? toastmsgAnimation.ErrorFadeInOutRule
      : toastmsgAnimation.fadeInOutRule};
  animation-fill-mode: forwards;
`;
