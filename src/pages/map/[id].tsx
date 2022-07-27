import { GetServerSideProps } from "next";
import nextCookies from "next-cookies";
import { restaurantApi } from "src/apis";
import { RestaurantDetail } from "src/components/templates";
import { restaurantTypes } from "src/types";

interface MapDetailProps {
  nickname: string;
  restaurantInfo: restaurantTypes.restaurantProps;
}
const MapDetail = ({ nickname, restaurantInfo }: MapDetailProps) => {
  return (
    <RestaurantDetail
      restaurantInfo={restaurantInfo}
      nickname={nickname}
      onLikeMenu={() => "hi"}
    />
  );
};

export default MapDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookies(ctx);
  const nickname = allCookies.nickname || "";
  console.log(nickname)
  const restaurantInfo = await restaurantApi.getRestaurantById(
    `${ctx.query.id}`
  );
  return {
    props: {
      restaurantInfo,
      nickname,
    },
  };
};
