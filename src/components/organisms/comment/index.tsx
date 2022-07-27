import { Badge } from "@mui/material";
import Image from "next/image";
import {
  createContext,
  HTMLAttributes,
  useContext,
  useMemo,
} from "react";
import { menuIcon } from "src/assets";
import { Star } from "src/components/atoms";
import { restaurantTypes } from "src/types";
import styled from "styled-components";

interface ContextProps extends HTMLAttributes<HTMLDivElement> {
  comment?: restaurantTypes.menuCommentProps;
  onClickMenu?: () => void;
}
const CommentContext = createContext<ContextProps>({});
CommentContext.displayName = "CommentContext";

interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  comment: restaurantTypes.menuCommentProps;
  onClickMenu?: () => void;
}
const Comment = ({
  id,
  className,
  style,
  children,
  comment,
  onClickMenu,
}: CommentProps) => {
  const value = useMemo(() => ({ comment, onClickMenu }), [comment]);
  return (
    <CommentContext.Provider value={value}>
      <CommentWrap id={id} className={className} style={style}>
        {children}
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
    </CommentContext.Provider>
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
      src="https://image.dongascience.com/Photo/2020/03/15856430426741.jpg"
      width={36}
      height={36}
      style={{ borderRadius: 18, minWidth: 36 }}
    />
  );
};

const MyProfileImg = () => {
  const { comment } = useComment();
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={<Me>나</Me>}
    >
      <Image
        alt="profile_img"
        src="https://image.dongascience.com/Photo/2020/03/15856430426741.jpg"
        width={36}
        height={36}
        style={{ borderRadius: 18, minWidth: 36 }}
      />
    </Badge>
  );
};

const Me = styled.p`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 1px solid var(--white);
  background-color: var(--red_1);
  font-size: 10px;
  color: var(--white);
  text-align: center;
  line-height: 16px;
`;

const Menu = () => {
  const { onClickMenu } = useComment();
  return <MenuIcon onClick={onClickMenu} />;
};

const MenuIcon = styled.button`
  position: absolute;
  right: 0;
  transform: translateX(-10px);
  outline: none;
  background: url(${menuIcon}) center center / cover;
  width: 20px;
  height: 20px;
`;

Comment.DefaultProfileImg = DefaultProfileImg;
Comment.MyProfileImg = MyProfileImg;
Comment.Menu = Menu;
