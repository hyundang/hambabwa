import { GetServerSideProps } from "next";
import { RestaurantDetail } from "src/components/templates";
import { restaurantTypes } from "src/types";
import { client, restaurantApi, userApi } from "src/apis";
import { auth } from "src/apis/auth";
import nextCookies from "next-cookies";
import { useSetRecoilState } from "recoil";
import states from "src/modules/states";
import { useEffect } from "react";

interface MapDetailProps {
  restaurantInfo: restaurantTypes.restaurantProps;
  nickname: string;
  email: string;
}
const MapDetail = ({ restaurantInfo, nickname }: MapDetailProps) => {
  const handleLikeMenu = async (menuId: number) => {
    await userApi.patchProfileListById(menuId);
  };

  const setScore = useSetRecoilState(states.CommentScoreState);

  const setRestaurantInfo = useSetRecoilState(states.RestaurantInfoState);
  useEffect(() => {
    setRestaurantInfo(restaurantInfo);
  }, []);

  const handleClickDelete = async (cid: number) => {
    await restaurantApi.deleteComment(cid);
  };

    return (
      <RestaurantDetail
        restaurantInfo={restaurantInfo}
        nickname={nickname}
        email={email}
        onLikeMenu={handleLikeMenu}
        onChangeScore={setScore}
        onClickCommentDelete={handleClickDelete}
      />
    );
};

export default MapDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookies(ctx);
  const { nickname, email } = allCookies;

  if (ctx.req.headers.cookie) {
    auth.defaults.headers.common.Cookie = ctx.req.headers.cookie;
    client.defaults.headers.common.Cookie = ctx.req.headers.cookie;
  }
  const restaurantInfo = await restaurantApi.getRestaurantById(
    `${ctx.query.id}`
  );
  return {
    props: {
      restaurantInfo,
      nickname,
      email,
    },
  };
};
