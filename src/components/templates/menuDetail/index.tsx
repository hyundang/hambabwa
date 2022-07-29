import { PageContainer } from "src/components/organisms";
import { MenuInfoList } from "src/components/templates";
import { menuTypes } from "src/types";

interface MenuDetailProps {
  menuInfos: menuTypes.menuDetailProps[];
  onLikeMenu: (menuId: number) => void;
}
const MenuDetail = ({ menuInfos, onLikeMenu }: MenuDetailProps) => {
  return (
    <PageContainer title="메뉴 상세" isBackActive>
      <MenuInfoList
        menuInfos={menuInfos}
        onLikeMenu={onLikeMenu}
        totalCount={menuInfos.length}
      />
    </PageContainer>
  );
};

export default MenuDetail;
