import { useState, useEffect } from "react";
import { closeIcon } from "src/assets";
import { Button, Icon } from "src/components/atoms";
import {
  InputCancel,
  InputImg,
  ModalContainer,
} from "src/components/molecules";
import { useInput } from "src/hooks";
import styled from "styled-components";

interface ProfileEditModalProps {
  initNickname: string;
  initImageUrl: string;
  setIsOpen: (value: boolean) => void;
  onClickEdit: (nickname: string, file?: File) => void;
}
const ProfileEditModal = ({
  initNickname,
  initImageUrl,
  setIsOpen,
  onClickEdit,
}: ProfileEditModalProps) => {
  const { value: nickname, onChange, setValue } = useInput(initNickname);
  const [imgFile, setImgFile] = useState<File>();
  const handleChangeImg = (file: File) => setImgFile(file);

  const [isError, setIsError] = useState(false);
  const handleClickEdit = () => {
    if (nickname.length > 20) {
      setIsError(true);
      return undefined;
    }
    onClickEdit(nickname, imgFile);
    setIsOpen(false);
  };
  useEffect(() => {
    if (isError && nickname.length <= 20) setIsError(false);
  }, [nickname]);

  const handleClose = () => setIsOpen(false);

  return (
    <ModalContainer isBlack setIsOpen={setIsOpen}>
      <ModalWrap
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <p>프로필 수정</p>
        <CloseIcon onClick={handleClose}>
          <img alt="close_icon" src={closeIcon} />
        </CloseIcon>
        <StyledInputImg imgUrl={initImageUrl} onChangeImg={handleChangeImg} />
        <StyledInputCancel
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          onChange={onChange}
          setValue={setValue}
          left={245}
          isError={isError}
          errorText="닉네임은 최대 20자까지 가능합니다."
        />
        <StyledButton isActive onClick={handleClickEdit}>
          수정
        </StyledButton>
      </ModalWrap>
    </ModalContainer>
  );
};

export default ProfileEditModal;

const ModalWrap = styled.div`
  width: 280px;
  height: 314px;
  padding: 28px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: var(--white);

  p {
    width: 100%;
    font-weight: 600;
    font-size: 18px;
  }
`;

const CloseIcon = styled(Icon)`
  position: absolute;
  z-index: 2;
  right: 17px;
  top: 20px;
`;

const StyledInputImg = styled(InputImg)`
  width: 70px;
  height: 70px;
  margin-top: 26px;
`;

const StyledInputCancel = styled(InputCancel)`
  margin-top: 24px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 15px;
`;
