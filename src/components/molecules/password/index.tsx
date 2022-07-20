import { InputHTMLAttributes, useState } from "react";
import { Input } from "src/components/atoms";
import styled from "styled-components";
import { hideIcon, viewIcon } from "src/assets";

const Password = ({
  id,
  className,
  style,
  name,
  placeholder,
  onChange,
  value,
}: InputHTMLAttributes<HTMLInputElement>) => {
  const [type, setType] = useState("password");

  const handleClickIcon = () =>
    setType((t) => (t === "password" ? "text" : "password"));

  return (
    <PasswordWrap id={id} className={className} style={style} type={type}>
      <Input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <i className="eye_icon" onClick={handleClickIcon} />
    </PasswordWrap>
  );
};

export default Password;

const PasswordWrap = styled.div<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .input {
    padding: 4px 31px 4px 4px;
  }

  .eye_icon {
    width: 19px;
    height: 19px;
    position: absolute;
    z-index: 2;
    margin-right: 8px;
    background: ${({ type }) =>
      type === "password" ? `url("${hideIcon}")` : `url("${viewIcon}")`};
  }
`;
