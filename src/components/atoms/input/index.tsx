import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputWrap {...props} />;
};

export default Input;

const InputWrap = styled.input`
  width: 100%;
  padding: 7px 4px 7px 4px;
  border-bottom: 1px solid var(--gray_3);
  color: var(--gray_1);
  &::placeholder {
    color: var(--gray_3);
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--gray_1);
  }
`;
