import { HTMLAttributes, MouseEvent, useState } from "react";
import { footTextImg } from "src/assets";
import { Categories } from "src/components/molecules";
import { MenuModal } from "src/components/organisms";
import { useWindowSize } from "src/hooks";
import { categoryTypes, menuTypes } from "src/types";
import styled from "styled-components";

export interface selectedMenuProps {
  categoryCode: string;
  menuCodes: string[];
}
export interface ChooseCategoryProps extends HTMLAttributes<HTMLDivElement> {
  categoryList: categoryTypes.getCategoryResProps[];
  menuList: menuTypes.getMenuByCategoryResProps[];
  selectedCategory: string;
  setSelectedCategory: (code: string) => void;
  selectedMenus: selectedMenuProps[];
  setSelectedMenus: (data: selectedMenuProps[]) => void;
}

const ChooseCategory = ({
  categoryList,
  menuList,
  selectedCategory,
  setSelectedCategory,
  selectedMenus,
  setSelectedMenus,
}: ChooseCategoryProps) => {
  const { width } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleClickCategory = (e: MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      handleOpenModal();
      setSelectedCategory(e.target.id);
    }
  };
  const returnSelectedCategories = () =>
    selectedMenus
      .filter((sm) => sm.menuCodes.length > 0)
      .map((sm) => sm.categoryCode);

  const handleSelectMenu = (menuCode: string) => () => {
    setSelectedMenus(
      selectedMenus.map((sm) => {
        if (sm.categoryCode === selectedCategory) {
          if (sm.menuCodes.includes(menuCode))
            return {
              categoryCode: sm.categoryCode,
              menuCodes: sm.menuCodes.filter((mc) => mc !== menuCode),
            };
          return {
            categoryCode: sm.categoryCode,
            menuCodes: [...sm.menuCodes, menuCode],
          };
        }
        return sm;
      })
    );
  };

  const handleFinish = () => {
    handleCloseModal();
  };

  return (
    <ChooseCategoryWrap>
      {/* <p>
            좋아하는 음식을
            <br />
            <b>개수 상관없이</b> 선택해주세요
          </p> */}
      <img className="foot_text" src={footTextImg} alt="food_text" />
      <div className="categories">
        {isOpen && (
          <ModalWrap width={width || 0}>
            <StyledMenuModal
              menuList={menuList}
              selected={
                selectedMenus.find((sm) => sm.categoryCode === selectedCategory)
                  ?.menuCodes || []
              }
              onSelectMenu={handleSelectMenu}
              onFinish={handleFinish}
            />
          </ModalWrap>
        )}
        <Categories
          categoryList={categoryList}
          selected={returnSelectedCategories()}
          onClickCategory={handleClickCategory}
        />
      </div>
    </ChooseCategoryWrap>
  );
};

export default ChooseCategory;

const ChooseCategoryWrap = styled.div`
  outline: none;
  width: 100%;
  height: auto;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .categories {
    width: 100%;
    height: 392px;
    overflow-y: scroll;
    margin-top: 32px;
  }
`;

interface ModalWrapProps {
  width: number;
}
const ModalWrap = styled.section<ModalWrapProps>`
  width: ${({ width }) => width - 66}px;
  height: 392px;
  overflow-y: scroll;
  z-index: 2;
  position: absolute;
  border-radius: 20px;
`;
const StyledMenuModal = styled(MenuModal)`
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;
