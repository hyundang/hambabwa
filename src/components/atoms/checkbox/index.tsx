import { InputHTMLAttributes } from "react";
import check_icon from "src/assets/icn_check.svg";
import styled from "styled-components";

const CheckBox = ({
  id,
  className,
  style,
  onClick,
  checked,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <CheckBoxWrap id={id} className={className} style={style} checked={checked}>
      <input
        className="hidden_check_box"
        type="checkbox"
        checked={checked}
        onClick={onClick}
      />
      <div className="check_box">
        <img src={check_icon} alt="check_icon" className="check_icon" />
      </div>
    </CheckBoxWrap>
  );
};

export default CheckBox;

const CheckBoxWrap = styled.div<InputHTMLAttributes<HTMLInputElement>>`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 100%;

  .check_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ checked }) =>
      checked ? "var(--red_1)" : "var(--gray_6)"};
    transition: 0.2s;

    .check_icon {
      width: 18px;
      height: 18px;
    }
  }

  .hidden_check_box {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
