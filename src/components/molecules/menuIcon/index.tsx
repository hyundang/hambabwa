import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { menuIcon } from "src/assets";
import states from "src/modules/states";
import { restaurantTypes } from "src/types";
import styled from "styled-components";
import ModalContainer from "../modalContainer";

interface MenuIconProps {
  comment?: restaurantTypes.menuCommentProps;
  onClickDelete: () => void;
}
const MenuIcon = ({ comment, onClickDelete }: MenuIconProps) => {
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
      <MenuButton onClick={handleClickMenu} />
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

export default MenuIcon;

const MenuButton = styled.button`
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
