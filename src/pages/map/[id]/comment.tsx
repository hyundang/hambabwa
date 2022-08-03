import { GetServerSideProps } from "next";
import { restaurantApi } from "src/apis";
import { CommentDetail, Loading } from "src/components/templates";
import nextCookies from "next-cookies";
import { useToastMsg } from "src/hooks";
import { ToastMsg } from "src/components/molecules";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface CommentDetailPageProps {
  email: string;
}
const CommentDetailPage = ({ email }: CommentDetailPageProps) => {
  const router = useRouter();
  const {
    isLoading,
    isError,
    data: restaurantInfo,
  } = useQuery("restaurantInfo", () =>
    restaurantApi.getRestaurantById(`${router.query.id}`)
  );

  const { isToastMsgActive, handleToastMsg } = useToastMsg("deleteComment");
  const queryClient = useQueryClient();
  const commentMutation = useMutation(restaurantApi.deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("restaurantInfo");
    },
  });
  const handleClickDelete = async (cid: number) => {
    commentMutation.mutate(cid);
    handleToastMsg(true);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    throw new Error("error");
  }
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
