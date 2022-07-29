import { ChangeEvent, HTMLAttributes } from "react";
import { Star } from "src/components/atoms";
import styled from "styled-components";

interface WriteCommentProps extends HTMLAttributes<HTMLDivElement> {
  score: number;
  onChangeScore: (score: number) => void;
  comment: string;
  onChangeComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const WriteComment = ({
  id,
  className,
  style,
  score,
  onChangeScore,
  comment,
  onChangeComment,
}: WriteCommentProps) => {
  return (
    <WriteCommentWrap id={id} className={className} style={style}>
      <Star defaultValue={score} onChange={onChangeScore} size={40} />
      <p className="score">
        {score}
        <b> / 5</b>
      </p>
      <InputComment
        value={comment}
        onChange={onChangeComment}
        placeholder="매장에 대한 후기를 작성해주세요."
      />
    </WriteCommentWrap>
  );
};

export default WriteComment;

const WriteCommentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    margin-top: 9px;
    margin-bottom: 24px;
    height: 37px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    b {
      color: var(--gray_2);
    }
  }
`;

const InputComment = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 20px 10px;
  border-top: 1px solid var(--gray_7);
  resize: none;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: var(--gray_2);
  }
`;
