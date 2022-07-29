import { HTMLAttributes } from "react";
import { Like, ProfileImg } from "src/components/atoms";
import { menuTypes } from "src/types";
import styled from "styled-components";

interface MenuInfoProps extends HTMLAttributes<HTMLDivElement> {
  menuInfo: menuTypes.menuDetailProps;
  onClickLike: () => void;
}
const MenuInfo = ({
  id,
  className,
  style,
  menuInfo,
  onClickLike,
}: MenuInfoProps) => {
  return (
    <MenuInfoWrap id={id} className={className} style={style}>
      <InfoWrap>
        <ProfileImg src={menuInfo.menuImage} size={86} />
        <div className="text_wrap">
          <p className="title">{menuInfo.foodTitle}</p>
          <p>{menuInfo.calorie}</p>
        </div>
      </InfoWrap>
      <Like
        initState={menuInfo.isFavorite !== null}
        size={28}
        onClickLike={onClickLike}
      />
    </MenuInfoWrap>
  );
};

export default MenuInfo;

const MenuInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid var(--gray_7);
  padding: 17px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .text_wrap {
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    p {
      height: 21px;
      font-size: 14px;
      line-height: 21px;
    }
    .title {
      font-weight: 600;
    }
  }
`;
