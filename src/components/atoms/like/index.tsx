import { HTMLAttributes, useEffect, useState } from "react";
import { emptyHeartIcon, heartIcon } from "src/assets";
import styled from "styled-components";

interface LikeProps extends HTMLAttributes<HTMLButtonElement> {
  onClickLike: () => void;
  initState: boolean;
  size: number;
}
const Like = ({ id, className, onClickLike, initState, size }: LikeProps) => {
  const [isLike, setIsLike] = useState(false);
  const handleClickLike = () => {
    onClickLike();
    setIsLike(!isLike);
  };

  useEffect(() => {
    setIsLike(initState);
  }, []);

  return (
    <LikeButton
      id={id}
      className={className}
      type="button"
      style={{ width: size, height: size }}
      isLike={isLike}
      onClick={handleClickLike}
    />
  );
};

export default Like;

interface LikeButtonProps {
  isLike: boolean;
}
const LikeButton = styled.button<LikeButtonProps>`
  outline: none;
  transition: 200ms;
  background: url(${({ isLike }) => (isLike ? heartIcon : emptyHeartIcon)})
    center center / cover;
`;
