import { PageContainer } from "src/components/organisms";
import { CommentList } from "src/components/templates";
import { restaurantTypes } from "src/types";

interface CommentDetailProps {
  totalScore: number;
  comments: restaurantTypes.menuCommentProps[];
  onClickDelete: (cid: number) => void;
  email: string;
}
const CommentDetail = ({
  comments,
  totalScore,
  onClickDelete,
  email,
}: CommentDetailProps) => {
  return (
    <PageContainer title="후기 상세" isBackActive>
      <CommentList comments={comments} onClickDelete={onClickDelete}>
        <CommentList.TotalScore totalScore={totalScore} displayTotalCount />
        <CommentList.DefaultComments email={email} />
      </CommentList>
    </PageContainer>
  );
};

export default CommentDetail;
