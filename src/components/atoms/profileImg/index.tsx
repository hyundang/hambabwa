import Image from "next/image";

interface ProfileImgProps {
  src: string;
  size: number;
}
const ProfileImg = ({ src, size }: ProfileImgProps) => {
  return (
    <Image
      alt="profile_img"
      className="profile_img"
      src={src}
      width={size}
      height={size}
      style={{
        borderRadius: "50%",
        border: "4px solid var(--red_2)",
      }}
    />
  );
};

export default ProfileImg;
