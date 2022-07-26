import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 활성화 여부 */
  isActive: boolean;
  /** 흰색 버튼 여부 */
  isWhite?: boolean;
}

const Button = ({
  id,
  className,
  style,
  children,
  isActive,
  onClick,
  isWhite = false,
}: ButtonProps) => {
  return (
    <ButtonWrap
      id={id}
      className={className}
      style={style}
      type="button"
      role="button"
      isActive={isActive}
      onClick={isActive || isWhite ? onClick : undefined}
    >
      {children}
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled.button<ButtonProps>`
  outline: none;
  width: 100%;
  height: 100%;
  margin: 0;
  color: var(--white);
  transition: 0.2s;
  ${({ isActive, isWhite }) =>
    isActive
      ? css`
          background-color: var(--red_1);
        `
      : isWhite
      ? css`
          background-color: var(--white);
          color: var(--red_1);
        `
      : css`
          background-color: var(--gray_5);
        `}
`;
