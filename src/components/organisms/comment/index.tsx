import Image from "next/image";
import { createContext, HTMLAttributes, useContext, useMemo } from "react";
import { Star } from "src/components/atoms";
import { MenuIcon, MyProfileImg as ProfileImg } from "src/components/molecules";
import { restaurantTypes } from "src/types";
import styled from "styled-components";

interface ContextProps extends HTMLAttributes<HTMLDivElement> {
  comment?: restaurantTypes.menuCommentProps;
}
const CommentContext = createContext<ContextProps>({});
CommentContext.displayName = "CommentContext";

interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  comment: restaurantTypes.menuCommentProps;
}
const Comment = ({ id, className, style, children, comment }: CommentProps) => {
  const value = useMemo(() => ({ comment }), [comment]);
  return (
    <CommentContext.Provider value={value}>
      <CommentWrap id={id} className={className} style={style}>
        {children}
      </CommentWrap>
    </CommentContext.Provider>
  );
};

export default Comment;

const CommentWrap = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--gray_7);
  padding: 12px 0 18px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const useComment = () => {
  const context = useContext(CommentContext);
  if (context === undefined)
    throw new Error("useToggle must be used within a Comment");
  return context;
};

const DefaultProfileImg = () => {
  const { comment } = useComment();
  return (
    <Image
      alt="profile_img"
      src={comment?.writer.imageUrl || ""}
      width={36}
      height={36}
      style={{ borderRadius: 18, minWidth: 36 }}
    />
  );
};

const MyProfileImg = () => {
  const { comment } = useComment();
  return <ProfileImg imageUrl={comment?.writer.imageUrl || ""} size={36} />;
};

const Menu = ({ onClickDelete }: { onClickDelete: () => void }) => {
  const { comment } = useComment();
  return <MenuIcon comment={comment} onClickDelete={onClickDelete} />;
};

const DefaultContent = () => {
  const { comment } = useComment();
  return (
    <ContentWrap>
      <Star defaultValue={comment?.stars || 0} readOnly size={10} />
      <div className="text_wrap" style={{ marginTop: 3 }}>
        <p className="nickname">{comment?.writer?.nickname}&nbsp;</p>
        <p className="date">
          | {comment?.createdAt.slice(0, 10).replaceAll("-", ".")}
        </p>
      </div>
      <p className="comment">{comment?.comment}</p>
    </ContentWrap>
  );
};
const MyContent = () => {
  const { comment } = useComment();
  return (
    <ContentWrap>
      <p className="restaurant">{`레스토랑이름${1}`}</p>
      <div className="text_wrap">
        <Star defaultValue={comment?.stars || 0} readOnly size={9} />
        <p className="date">
          &nbsp;| {comment?.createdAt.slice(0, 10).replaceAll("-", ".")}
        </p>
      </div>
      <p className="comment">{comment?.comment}</p>
    </ContentWrap>
  );
};
const ContentWrap = styled.div`
  margin-left: 7px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .restaurant {
    font-weight: 500;
    font-size: 13px;
  }

  .text_wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
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

Comment.DefaultProfileImg = DefaultProfileImg;
Comment.MyProfileImg = MyProfileImg;
Comment.DefaultContent = DefaultContent;
Comment.MyContent = MyContent;
Comment.Menu = Menu;
