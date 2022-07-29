import { Badge } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

interface MyProfileImgProps {
  imageUrl: string;
  size: number;
}
const MyProfileImg = ({ imageUrl, size }: MyProfileImgProps) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={<Me>나</Me>}
    >
      <Image
        alt="profile_img"
        src={imageUrl}
        width={size}
        height={size}
        style={{ borderRadius: size / 2, minWidth: size }}
      />
    </Badge>
  );
};

export default MyProfileImg;

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
