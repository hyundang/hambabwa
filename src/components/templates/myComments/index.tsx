import { PageContainer } from "src/components/organisms";
import { userTypes } from "src/types";
import CommentList from "../commentList";

interface MyCommentsProps {
  comments: userTypes.myCommentProps[];
  onClickDelete: (cid: number) => void;
}
const MyComments = ({ comments, onClickDelete }: MyCommentsProps) => {
  return (
    <PageContainer isBackActive title="내가 쓴 후기" style={{ padding: 0 }}>
      <CommentList comments={comments} onClickDelete={onClickDelete}>
        <CommentList.TotalCount />
        <CommentList.MyComments />
      </CommentList>
    </PageContainer>
  );
};

export default MyComments;
