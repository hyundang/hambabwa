import { InputHTMLAttributes } from "react";
import CheckBox from "src/components/atoms/checkbox";
import styled from "styled-components";

interface CheckboxFormProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const CheckboxForm = ({
  id,
  className,
  style,
  checked,
  onClick,
  text,
}: CheckboxFormProps) => {
  return (
    <CheckboxFormWrap id={id} className={className} style={style}>
      <CheckBox className="checkbox" checked={checked} onClick={onClick} />
      <span className="text" onClick={onClick}>
        {text}
      </span>
    </CheckboxFormWrap>
  );
};

export default CheckboxForm;

const CheckboxFormWrap = styled.div<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .checkbox {
    width: 26px;
    height: 26px;
  }

  .text {
    margin-left: 10px;
    font-size: 15px;
    letter-spacing: -1.3px;
    color: var(--gray_3);
  }
`;
