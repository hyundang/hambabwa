import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Icon = ({
  id,
  className,
  style,
  children,
  onClick,
  onChange,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <IconWrap
      id={id}
      className={className}
      style={style}
      type="button"
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </IconWrap>
  );
};

export default Icon;

const IconWrap = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
`;
