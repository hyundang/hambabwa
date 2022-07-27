import Image from "next/image";
import { HTMLAttributes } from "react";
import { Star } from "src/components/atoms";
import { restaurantTypes } from "src/types";
import styled from "styled-components";

interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  comment: restaurantTypes.menuCommentProps;
}
const Comment = ({ id, className, style, comment }: CommentProps) => {
  return (
    <CommentWrap id={id} className={className} style={style}>
      <Image
        alt="profile_img"
        src="https://image.dongascience.com/Photo/2020/03/15856430426741.jpg"
        width={36}
        height={36}
        style={{ borderRadius: 18, minWidth: 36 }}
      />
      <ContentWrap>
        <Star defaultValue={comment.stars} readOnly size={10} />
        <div className="text_wrap">
          <p className="nickname">{comment.writer.nickname}&nbsp;</p>
          <p className="date">
            | {comment.createdAt.slice(0, 10).replaceAll("-", ".")}
          </p>
        </div>
        <p className="comment">{comment.comment}</p>
      </ContentWrap>
    </CommentWrap>
  );
};

export default Comment;

const CommentWrap = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--gray_7);
  padding: 10px 0 18px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ContentWrap = styled.div`
  margin-left: 7px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .text_wrap {
    margin-top: 3px;
    display: flex;
    flex-direction: row;
    row-gap: 3px;
    p {
      height: 20px;
      font-size: 13px;
      line-height: 20px;
    }
    .nickname {
      font-weight: 600;
    }
    .date {
      font-size: 11px;
      color: var(--gray_3);
    }
  }

  .comment {
    margin-top: 4px;
    font-size: 12px;
    max-height: 50px;
    line-height: 18px;
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
