import {
  createContext,
  HTMLAttributes,
  useContext,
  useMemo,
  useState,
} from "react";
import { Comment, ConfirmModal } from "src/components/organisms";
import { restaurantTypes } from "src/types";
import styled from "styled-components";
import { Score } from "src/components/molecules";

interface ContextProps extends HTMLAttributes<HTMLDivElement> {
  comments?: restaurantTypes.menuCommentProps[];
  handleClickDelete?: (cid: number) => () => void;
}
const CommentListContext = createContext<ContextProps>({});
CommentListContext.displayName = "CommentListContext";

interface CommentListProps extends HTMLAttributes<HTMLDivElement> {
  comments: restaurantTypes.menuCommentProps[];
  onClickDelete: (cid: number) => void;
}
const CommentList = ({
  children,
  comments,
  onClickDelete,
}: CommentListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (value: boolean) => () => setIsOpen(value);

  const [commentId, setCommentId] = useState(-1);
  const handleClickDelete = (cid: number) => () => {
    setCommentId(cid);
    setIsOpen(true);
  };
  const handleClickYes = () => {
    onClickDelete(commentId);
    setIsOpen(false);
  };

  const value = useMemo(
    () => ({
      comments,
      handleClickDelete,
    }),
    [comments]
  );

  return (
    <CommentListContext.Provider value={value}>
      {children}
      {isOpen && (
        <ConfirmModal
          text="후기를 삭제하시겠어요?"
          setIsOpen={setIsOpen}
          onClickNo={handleOpen(false)}
          onClickYes={handleClickYes}
        />
      )}
    </CommentListContext.Provider>
  );
};

export default CommentList;

const useCommentList = () => {
  const context = useContext(CommentListContext);
  if (context === undefined)
    throw new Error("useToggle must be used within a CommentList");
  return context;
};

interface TotalScoreProps {
  totalScore: number;
  displayTotalCount?: boolean;
}
const TotalScore = ({ totalScore, displayTotalCount }: TotalScoreProps) => {
  const { comments } = useCommentList();
  return (
    <Score
      score={totalScore}
      displayTotalCount={displayTotalCount}
      totalCount={comments?.length}
    />
  );
};

const TotalCount = () => {
  const { comments } = useCommentList();
  return (
    <CountWrap>
      <p className="score_wrap">
        전체 <b>{comments?.length}</b>
      </p>
    </CountWrap>
  );
};
const CountWrap = styled.div`
  width: 100%;
  height: 34px;
  padding: 0 25px;
  border-bottom: 1px solid var(--gray_7);
  line-height: 34px;
  font-weight: 500;
  font-size: 12px;
  b {
    font-weight: 600;
    color: var(--red_1);
  }
`;

const DefaultComments = ({ email }: { email: string }) => {
  const { comments, handleClickDelete } = useCommentList();

  return (
    <CommentListWrap>
      {comments?.length === 0 ? (
        <p className="empty_text">작성된 후기가 없어요.</p>
      ) : (
        handleClickDelete &&
        comments &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment}>
            {"writer" in comment && email === comment.writer.email ? (
              <>
                <Comment.MyProfileImg />
                <Comment.Menu onClickDelete={handleClickDelete(comment.id)} />
              </>
            ) : (
              <Comment.DefaultProfileImg />
            )}
          </Comment>
        ))
      )}
    </CommentListWrap>
  );
};

const MyComments = () => {
  const { comments, handleClickDelete } = useCommentList();

  return (
    <CommentListWrap>
      {comments?.length === 0 ? (
        <p className="empty_text" style={{ marginTop: 20 }}>
          작성된 후기가 없어요.
        </p>
      ) : (
        handleClickDelete &&
        comments &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            style={{ padding: "12px 25px 18px 18px" }}
          >
            <Comment.Menu onClickDelete={handleClickDelete(comment.id)} />
          </Comment>
        ))
      )}
    </CommentListWrap>
  );
};

const CommentListWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .empty_text {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: var(--gray_2);
  }
`;

CommentList.TotalScore = TotalScore;
CommentList.TotalCount = TotalCount;
CommentList.DefaultComments = DefaultComments;
CommentList.MyComments = MyComments;
