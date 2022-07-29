import { PageContainer } from "src/components/organisms";
import { CommentList } from "src/components/templates";
import { restaurantTypes } from "src/types";

interface CommentDetailProps {
  totalScore: number;
  comments: restaurantTypes.menuCommentProps[];
  onClickDelete: (cid: number) => void;
  nickname: string;
}
const CommentDetail = ({
  comments,
  totalScore,
  onClickDelete,
  nickname,
}: CommentDetailProps) => {
  return (
    <PageContainer title="후기 상세" isBackActive>
      <CommentList comments={comments} onClickDelete={onClickDelete}>
        <CommentList.TotalScore totalScore={totalScore} displayTotalCount />
        <CommentList.DefaultComments nickname={nickname} />
      </CommentList>
    </PageContainer>
  );
};

export default CommentDetail;
