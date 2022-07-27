import Image from "next/image";
import { useEffect, useState } from "react";
import { logoImg } from "src/assets";
import { Button } from "src/components/atoms";
import { PageContainer, ChooseCategory } from "src/components/organisms";
import { ChooseCategoryProps } from "src/components/organisms/chooseCategory";
import styled from "styled-components";

interface ProfileProps extends ChooseCategoryProps {
  onClickNext: () => void;
}
const Profile = ({
  categoryList,
  menuList,
  selectedCategory,
  setSelectedCategory,
  selectedMenus,
  setSelectedMenus,
  onClickNext,
}: ProfileProps) => {
  const returnSelectedCategories = () =>
    selectedMenus
      .filter((sm) => sm.menuCodes.length > 0)
      .map((sm) => sm.categoryCode);

  const [isBtnActive, setIsBtnActive] = useState(false);
  useEffect(() => {
    if (returnSelectedCategories().length > 0) setIsBtnActive(true);
    else setIsBtnActive(false);
  }, [selectedMenus]);

  return (
    <PageContainer title="선호음식" isBackActive>
      <InnerContainer>
        <Image src={logoImg} alt="logo" width={129} height={123} priority />
        <ChooseCategory
          categoryList={categoryList}
          menuList={menuList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedMenus={selectedMenus}
          setSelectedMenus={setSelectedMenus}
        />
      </InnerContainer>
      <StyledButton isActive={isBtnActive} onClick={onClickNext}>
        다음
      </StyledButton>
    </PageContainer>
  );
};

export default Profile;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 18px;
`;
