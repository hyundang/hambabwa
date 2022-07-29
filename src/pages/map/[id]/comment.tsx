import { GetServerSideProps } from "next";
import { useRecoilValue } from "recoil";
import { restaurantApi } from "src/apis";
import { CommentDetail } from "src/components/templates";
import states from "src/modules/states";
import nextCookies from "next-cookies";

interface CommentDetailPageProps {
  nickname: string;
}
const CommentDetailPage = ({ nickname }: CommentDetailPageProps) => {
  const restaurantInfo = useRecoilValue(states.RestaurantInfoState);

  const handleClickDelete = async (cid: number) => {
    await restaurantApi.deleteComment(cid);
  };

  return (
    <CommentDetail
      comments={restaurantInfo?.comments || []}
      totalScore={restaurantInfo?.stars || 0}
      onClickDelete={handleClickDelete}
      nickname={nickname}
    />
  );
};

export default CommentDetailPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookies(ctx);
  const { nickname } = allCookies;
  return {
    props: {
      nickname,
    },
  };
};
