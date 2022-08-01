import { useRouter } from "next/router";
import { createContext, HTMLAttributes } from "react";
import styled from "styled-components";
import { ProfileImg as ProfileImgBox } from "src/components/atoms";
import { BackIcon } from "src/assets";

interface ContextProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  isBackActive?: boolean;
  onClickBack?: () => void;
}
const HeaderContext = createContext<ContextProps>({});
HeaderContext.displayName = "HeaderContext";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  isBackActive?: boolean;
  onClickBack?: () => void;
}
const Header = ({
  id,
  className,
  style,
  children,
  title,
  isBackActive = false,
  onClickBack,
}: HeaderProps) => {
  const router = useRouter();
  const handleClickBack = () => {
    onClickBack ? onClickBack() : router.back();
  };

  return (
    <HeaderWrap id={id} className={className} style={style}>
      {isBackActive && (
        <BackIcon className="back_icon" onClick={handleClickBack} />
      )}
      <p className="title">{title}</p>
      {children}
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  padding: 50px 23px 0 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--white);
  box-shadow: 0px 10px 10px rgba(255, 255, 255, 1);

  .back_icon {
    width: 24px;
    height: 24px;
    path {
      fill: var(--black);
    }
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

const ProfileImg = ({ imageUrl }: { imageUrl: string }) => {
  const router = useRouter();
  return (
    <ProfileImgWrap>
      <ProfileImgBox
        src={imageUrl}
        size={50}
        onClick={() => router.push("/mypage")}
      />
    </ProfileImgWrap>
  );
};
const ProfileImgWrap = styled.span`
  width: fit-content;
  height: fit-content;
  position: relative;
  top: -13px;
`;

Header.ProfileImg = ProfileImg;
