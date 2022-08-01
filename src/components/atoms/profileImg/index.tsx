import Image from "next/image";
import styled from "styled-components";

interface ProfileImgProps {
  src: string;
  size: number;
  onClick?: () => void;
}
const ProfileImg = ({ src, size, onClick }: ProfileImgProps) => {
  return (
    <StyledImage
      alt="profile_img"
      src={src}
      width={size}
      height={size}
      onClick={onClick}
    />
  );
};

export default ProfileImg;

const StyledImage = styled(Image)`
  border: 4px solid var(--red_2) !important;
  border-radius: 50%;
`;
