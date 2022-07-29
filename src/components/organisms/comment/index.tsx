import { Badge } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  createContext,
  HTMLAttributes,
  useContext,
  useMemo,
  useState,
} from "react";
import { useSetRecoilState } from "recoil";
import { menuIcon } from "src/assets";
import { Star } from "src/components/atoms";
import { ModalContainer } from "src/components/molecules";
import states from "src/modules/states";
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
  padding: 12px 0 18px 0;
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
      src={comment?.writer.imageUrl || ""}
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
        src={comment?.writer.imageUrl || ""}
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

interface MenuProps {
  onClickDelete: () => void;
}
const Menu = ({ onClickDelete }: MenuProps) => {
  const { comment } = useComment();

  const [isOpen, setIsOpen] = useState(false);
  const handleClickMenu = () => setIsOpen(true);
  const handleClickDelete = () => {
    setIsOpen(false);
    onClickDelete();
  };

  const router = useRouter();
  const setComment = useSetRecoilState(states.CommentState);
  const handleClickEdit = () => {
    setComment(comment || null);
    router.push(`/comment/edit`);
  };

  return (
    <>
      <MenuIcon onClick={handleClickMenu} />
      {isOpen && (
        <ModalContainer
          setIsOpen={setIsOpen}
          style={{ right: 20, marginTop: 28, position: "absolute" }}
        >
          <Modal>
            <button type="button" onClick={handleClickEdit}>
              수정
            </button>
            <button type="button" onClick={handleClickDelete}>
              삭제
            </button>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

const MenuIcon = styled.button`
  position: absolute;
  right: 17px;
  transform: translateX(-10px);
  outline: none;
  background: url(${menuIcon}) center center / cover;
  width: 20px;
  height: 20px;
`;

const Modal = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 15px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  button {
    background-color: var(--white);
    outline: none;
    font-size: 12px;
    line-height: 15px;
  }
`;

Comment.DefaultProfileImg = DefaultProfileImg;
Comment.MyProfileImg = MyProfileImg;
Comment.Menu = Menu;
