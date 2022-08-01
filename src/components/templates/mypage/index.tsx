import Link from "next/link";
import { useState } from "react";
import {
  PageContainer,
  ProfileForm,
  ProfileEditModal,
} from "src/components/organisms";
import styled from "styled-components";

interface MyPageProps {
  nickname: string;
  imageUrl: string;
  onClickEdit: (nickname: string, file?: File) => void;
}
const MyPage = ({ nickname, imageUrl, onClickEdit }: MyPageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClickEdit = (newNickname: string, file?: File) => {
    onClickEdit(newNickname, file);
  };

  return (
    <>
      <PageContainer
        isBackActive
        title="마이페이지"
        style={{ paddingBottom: 44 }}
      >
        <ProfileForm
          imageUrl={imageUrl}
          nickname={nickname}
          onClickEditIcon={handleOpen}
        />
      </PageContainer>
      <Link href="/mypage/profile">
        <Button>내가 선호하는 음식</Button>
      </Link>
      <Link href="/mypage/comment">
        <Button>내가 쓴 후기</Button>
      </Link>
      {isOpen && (
        <ProfileEditModal
          initNickname={nickname}
          initImageUrl={imageUrl}
          setIsOpen={setIsOpen}
          onClickEdit={handleClickEdit}
        />
      )}
    </>
  );
};

export default MyPage;

const Button = styled.p`
  width: 100%;
  height: 70px;
  padding: 0 18px;
  border: 1px solid var(--gray_7);
  font-weight: 600;
  font-size: 20px;
  line-height: 70px;
`;
