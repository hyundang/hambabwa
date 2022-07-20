import { InputHTMLAttributes } from "react";
import { Input } from "src/components/atoms";
import styled from "styled-components";
import Password from "../password";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  errorMsg?: string;
}

const InputForm = ({
  id,
  className,
  style,
  name,
  placeholder,
  type,
  onChange,
  value,
  isError = false,
  errorMsg,
}: InputFormProps) => {
  return (
    <InputFormWrap
      id={id}
      className={className}
      style={style}
      isError={isError}
    >
      {type === "password" ? (
        <Password
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          className="input"
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
      <p className="error_msg">{errorMsg}</p>
    </InputFormWrap>
  );
};

export default InputForm;

const InputFormWrap = styled.div<InputFormProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .error_msg {
    margin-top: 8px;
    margin-left: 4px;
    font-size: 13px;
    color: var(--red_1);
    display: ${({ isError }) => (isError ? "block" : "none")};
  }
`;
