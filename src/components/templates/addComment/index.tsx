import { useRouter } from "next/router";
import { useState } from "react";
import {
  ConfirmModal,
  PageContainer,
  WriteComment,
} from "src/components/organisms";
import { useInput } from "src/hooks";
import styled from "styled-components";

interface AddCommentProps {
  score: number;
  initComment?: string;
  onChangeScore: (score: number) => void;
  onClickAdd: (comment: string) => void;
}
const AddComment = ({
  score,
  initComment = "",
  onChangeScore,
  onClickAdd,
}: AddCommentProps) => {
  const { value: comment, onChange: onChangeComment } = useInput(initComment);
  const handleClickAdd = () => onClickAdd(comment);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (value: boolean) => () => setIsOpen(value);

  const router = useRouter();

  return (
    <>
      <PageContainer
        isBackActive
        title=""
        style={{ paddingTop: 10 }}
        onClickBack={handleOpen(true)}
      >
        <AddButton onClick={handleClickAdd}>등록</AddButton>
        <WriteComment
          score={score}
          onChangeScore={onChangeScore}
          comment={comment}
          onChangeComment={onChangeComment}
        />
      </PageContainer>
      {isOpen && (
        <ConfirmModal
          text="후기작성을 취소하시겠어요?"
          setIsOpen={setIsOpen}
          onClickNo={handleOpen(false)}
          onClickYes={() => router.back()}
        />
      )}
    </>
  );
};

export default AddComment;

const AddButton = styled.button`
  outline: none;
  background-color: var(--white);
  width: 55px;
  height: 35px;
  position: fixed;
  z-index: 2;
  top: 45px;
  right: 27px;
  font-size: 16px;
  line-height: 24px;
`;
