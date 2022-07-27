import { HTMLAttributes } from "react";
import { Star } from "src/components/atoms";
import { Comment } from "src/components/organisms";
import { restaurantTypes } from "src/types";
import styled from "styled-components";

interface CommentListProps extends HTMLAttributes<HTMLDivElement> {
  totalScore: number;
  comments: restaurantTypes.menuCommentProps[];
}
const CommentList = ({
  id,
  className,
  totalScore,
  comments,
}: CommentListProps) => {
  return (
    <CommentListWrap id={id} className={className}>
      <TitleWrap>
        <p>{totalScore}점</p>
        <Star defaultValue={totalScore} readOnly size={22} />
      </TitleWrap>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </CommentListWrap>
  );
};

export default CommentList;

const CommentListWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleWrap = styled.div`
  margin-bottom: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    height: 31px;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    margin-right: 10px;
  }
`;
