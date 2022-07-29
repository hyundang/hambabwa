import { useQuery, useMutation, useQueryClient } from "react-query";
import { restaurantApi, userApi } from "src/apis";
import MyComments from "src/components/templates/myComments";

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
  const handleClickDelete = async (cid: number) => {
    commentMutation.mutate(cid);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    throw new Error("error");
  }
  return (
    <MyComments
      comments={comments?.comments || []}
      onClickDelete={handleClickDelete}
    />
  );
};

export default MyCommentPage;
