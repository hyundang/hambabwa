import { GetServerSideProps } from "next";
import { useRecoilValue } from "recoil";
import { restaurantApi } from "src/apis";
import { CommentDetail } from "src/components/templates";
import states from "src/modules/states";
import nextCookies from "next-cookies";
import { useToastMsg } from "src/hooks";
import { ToastMsg } from "src/components/molecules";

interface CommentDetailPageProps {
  email: string;
}
const CommentDetailPage = ({ email }: CommentDetailPageProps) => {
  const restaurantInfo = useRecoilValue(states.RestaurantInfoState);

  const { isToastMsgActive, handleToastMsg } = useToastMsg("deleteComment");
  const handleClickDelete = async (cid: number) => {
    await restaurantApi.deleteComment(cid);
    handleToastMsg(true);
  };

  return (
    <>
      <CommentDetail
        comments={restaurantInfo?.comments || []}
        totalScore={restaurantInfo?.stars || 0}
        onClickDelete={handleClickDelete}
        email={email}
      />
      <ToastMsg
        isActive={isToastMsgActive.deleteComment}
        setIsActive={handleToastMsg}
        text="❌ 후기를 삭제했어요!"
      />
    </>
  );
};

export default CommentDetailPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookies(ctx);
  const { email } = allCookies;
  return {
    props: {
      email,
    },
  };
};
