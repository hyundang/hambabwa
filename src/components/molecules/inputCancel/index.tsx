import { InputHTMLAttributes } from "react";
import { cancelIcon } from "src/assets";
import styled from "styled-components";

interface InputCancelProps extends InputHTMLAttributes<HTMLInputElement> {
  setValue: (value: string) => void;
  left: number;
  isError: boolean;
  errorText: string;
}
const InputCancel = ({
  id,
  className,
  style,
  value,
  onChange,
  placeholder,
  setValue,
  left,
  isError,
  errorText,
}: InputCancelProps) => {
  const handleClickCancel = () => {
    setValue("");
  };
  return (
    <InputWrap id={id} className={className} style={style}>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
      />
      <CancelIcon onClick={handleClickCancel} style={{ left }}>
        <img alt="cancel_icon" className="cancel_icon" src={cancelIcon} />
      </CancelIcon>
      {isError && <p className="error_msg">{errorText}</p>}
    </InputWrap>
  );
};

export default InputCancel;

const InputWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  .error_msg {
    width: 100%;
    padding: 8px 0 0 7px;
    font-size: 12px;
    color: var(--red_1);
  }
`;

const Input = styled.input`
  width: 100%;
  height: fit-content;
  padding: 9px 34px 9px 8px;
  border: 1px solid var(--gray_3);
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  ::placeholder {
    color: var(--gray_3);
  }
`;

const CancelIcon = styled.button`
  all: unset;
  position: absolute;
  z-index: 2;
  transform: translateX(-20px);
  background-color: unset;
  width: 24px;
  height: 24px;
  margin-top: 7px;
`;
