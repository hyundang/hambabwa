import { Badge } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface ImgWithBadgeProps {
  imageUrl: string;
  size: number;
  badgeContent: ReactNode;
}
const ImgWithBadge = ({ imageUrl, size, badgeContent }: ImgWithBadgeProps) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={badgeContent}
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

export default ImgWithBadge;
