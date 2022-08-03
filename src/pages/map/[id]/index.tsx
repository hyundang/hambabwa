import { GetServerSideProps } from "next";
import { Loading, RestaurantDetail } from "src/components/templates";
import { restaurantApi, userApi } from "src/apis";
import nextCookies from "next-cookies";
import { useSetRecoilState } from "recoil";
import states from "src/modules/states";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { useToastMsg } from "src/hooks";
import { ToastMsg } from "src/components/molecules";

interface MapDetailProps {
  nickname: string;
  email: string;
  imageUrl: string;
}
const MapDetail = ({ nickname, email, imageUrl }: MapDetailProps) => {
  const router = useRouter();
  const setRestaurantInfo = useSetRecoilState(states.RestaurantInfoState);
  const {
    isLoading,
    isError,
    data: restaurantInfo,
  } = useQuery(
    "restaurantInfo",
    () => restaurantApi.getRestaurantById(`${router.query.id}`),
    {
      onSuccess: (data) => setRestaurantInfo(data),
    }
  );

  const queryClient = useQueryClient();
  const profileMutation = useMutation(userApi.patchProfileListById, {
    onSuccess: () => {
      queryClient.invalidateQueries("restaurantInfo");
    },
  });
  const handleLikeMenu = async (menuId: number) => {
    profileMutation.mutate(menuId);
  };

  const { isToastMsgActive, handleToastMsg } = useToastMsg("deleteComment");
  const commentMutation = useMutation(restaurantApi.deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("restaurantInfo");
    },
  });
  const handleClickDelete = async (cid: number) => {
    commentMutation.mutate(cid);
    handleToastMsg(true);
  };

  const setScore = useSetRecoilState(states.CommentScoreState);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    throw new Error("error");
  }
  if (restaurantInfo)
    return (
      <>
        <RestaurantDetail
          restaurantInfo={restaurantInfo}
          nickname={nickname}
          email={email}
          imageUrl={imageUrl}
          onLikeMenu={handleLikeMenu}
          onChangeScore={setScore}
          onClickCommentDelete={handleClickDelete}
        />
        <ToastMsg
          isActive={isToastMsgActive.deleteComment}
          setIsActive={handleToastMsg}
          text="❌ 후기를 삭제했어요!"
        />
      </>
    );
};

export default MapDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookies(ctx);
  const { nickname, email, imageUrl } = allCookies;

  return {
    props: {
      nickname,
      email,
      imageUrl,
    },
  };
};
