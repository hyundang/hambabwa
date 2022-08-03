import { useQuery, useMutation, useQueryClient } from "react-query";
import { restaurantApi, userApi } from "src/apis";
import { ToastMsg } from "src/components/molecules";
import MyComments from "src/components/templates/myComments";
import { useToastMsg } from "src/hooks";

const MyCommentPage = () => {
  const {
    isLoading,
    isError,
    data: comments,
  } = useQuery("myComments", userApi.getMyComments);

  const queryClient = useQueryClient();
  const commentMutation = useMutation(restaurantApi.deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("myComments");
    },
  });
  const { isToastMsgActive, handleToastMsg } = useToastMsg("deleteComment");
  const handleClickDelete = async (cid: number) => {
    commentMutation.mutate(cid);
    handleToastMsg(true);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    throw new Error("error");
  }
  return (
    <>
      <MyComments
        comments={comments?.comments || []}
        onClickDelete={handleClickDelete}
      />
      <ToastMsg
        isActive={isToastMsgActive.deleteComment}
        setIsActive={handleToastMsg}
        text="❌ 후기를 삭제했어요!"
      />
    </>
  );
};

export default MyCommentPage;
