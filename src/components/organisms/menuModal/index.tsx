import { HTMLAttributes, useCallback } from "react";
import { Button } from "src/components/atoms";
import { menuTypes } from "src/types";
import styled from "styled-components";

interface MenuModalProps extends HTMLAttributes<HTMLDivElement> {
  menuList: menuTypes.getMenuByCategoryResProps[];
  selected: string[];
  onSelectMenu: (id: string) => () => void;
  onFinish: () => void;
}

const MenuModal = ({
  id,
  className,
  style,
  menuList,
  selected,
  onSelectMenu,
  onFinish,
}: MenuModalProps) => {
  const isSelected = useCallback(
    (code: string) => {
      return selected.includes(code);
    },
    [selected]
  );

  return (
    <MenuModalWrap id={id} className={className} style={style}>
      <ButtonWrap>
        {menuList.map((menu) => (
          <MenuButton
            key={menu.code}
            id={menu.code}
            isWhite
            isActive={isSelected(menu.code)}
            onClick={onSelectMenu(menu.code)}
          >
            {menu.title}
          </MenuButton>
        ))}
      </ButtonWrap>
      <BottomButton isActive onClick={onFinish}>
        완료
      </BottomButton>
    </MenuModalWrap>
  );
};

export default MenuModal;

const MenuModalWrap = styled.dialog`
  all: unset;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 26px 16px 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 11px;
  row-gap: 18px;
`;

const MenuButton = styled(Button)`
  width: fit-content;
  height: fit-content;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 18px;
`;

const BottomButton = styled(Button)`
  width: 204px;
  height: 46px;
  margin-top: 43px;
  border-radius: 10px;
  font-size: 18px;
`;
