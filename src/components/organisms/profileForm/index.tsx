import { editIcon } from "src/assets";
import { Icon } from "src/components/atoms";
import { ImgWithBadge } from "src/components/molecules";
import styled from "styled-components";

interface ProfileFormProps {
  nickname: string;
  imageUrl: string;
  onClickEditIcon: () => void;
}
const ProfileForm = ({
  nickname,
  imageUrl,
  onClickEditIcon,
}: ProfileFormProps) => {
  return (
    <ProfileFormWrap>
      <ImgWithBadge
        imageUrl={imageUrl}
        size={100}
        badgeContent={
          <EditIcon onClick={onClickEditIcon}>
            <img src={editIcon} style={{ width: 22, height: 22 }} />
          </EditIcon>
        }
      />
      <p className="nickname">{nickname}</p>
    </ProfileFormWrap>
  );
};

export default ProfileForm;

const ProfileFormWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .nickname {
    margin-top: 14px;
    height: 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`;

const EditIcon = styled(Icon)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: var(--red_2);
`;
