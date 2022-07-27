import { HTMLAttributes, useCallback } from "react";
import { MenuInfo } from "src/components/organisms";
import { menuTypes } from "src/types";
import styled from "styled-components";

interface MenuInfoListProps extends HTMLAttributes<HTMLDivElement> {
  menuInfos: menuTypes.menuDetailProps[];
  onLikeMenu: (menuId: number) => void;
}
const MenuInfoList = ({
  id,
  className,
  menuInfos,
  onLikeMenu,
}: MenuInfoListProps) => {
  const handleClickLike = useCallback(
    (menuId: number) => () => {
      onLikeMenu(menuId);
    },
    []
  );
  return (
    <MenuInfoListWrap id={id} className={className}>
      <TitleWrap>
        <p>오늘의 메뉴</p>
        <p className="total_count">{menuInfos.length}</p>
      </TitleWrap>
      {menuInfos.map((menuInfo) => (
        <MenuInfo
          key={menuInfo.menuId}
          menuInfo={menuInfo}
          onClickLike={handleClickLike(menuInfo.menuId)}
        />
      ))}
    </MenuInfoListWrap>
  );
};

export default MenuInfoList;

const MenuInfoListWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleWrap = styled.div`
  margin-left: 6px;
  margin-bottom: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .total_count {
    margin-left: 5px;
    color: var(--red_1);
  }
`;
