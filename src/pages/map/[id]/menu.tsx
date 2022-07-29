import { useRecoilValue } from "recoil";
import { MenuDetail } from "src/components/templates";
import states from "src/modules/states";

const MenuDetailPage = () => {
  const restaurantInfo = useRecoilValue(states.RestaurantInfoState);

  return (
    <MenuDetail
      menuInfos={restaurantInfo?.menus || []}
      onLikeMenu={() => "hi"}
    />
  );
};

export default MenuDetailPage;
