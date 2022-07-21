import { useRouter } from "next/router";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import back_icon from "src/assets/icn_back_arrow.svg";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
}
const Header = ({ id, className, style, title }: HeaderProps) => {
  const router = useRouter();
  const handleClickBack = () => router.back();

  return (
    <HeaderWrap id={id} className={className} style={style}>
      <i className="back_icon" onClick={handleClickBack} />
      <p className="title">{title}</p>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  padding-top: 50px;
  padding-left: 27px;
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  box-shadow: 0px 10px 10px rgba(255, 255, 255, 1);

  .back_icon {
    width: 25px;
    height: 25px;
    background: url(${back_icon}) center center / cover;
  }

  .title {
    height: 25px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    line-height: 25px;
    font-size: 20px;
    font-weight: 500;
    color: var(--gray_1);
  }
`;
