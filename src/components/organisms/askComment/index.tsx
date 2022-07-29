import Image from "next/image";
import { HTMLAttributes } from "react";
import { profileImg } from "src/assets";
import { Star } from "src/components/atoms";
import styled from "styled-components";

interface AskCommentProps extends HTMLAttributes<HTMLDivElement> {
  onChangeScore: (score: number) => void;
  nickname: string;
}
const AskComment = ({
  id,
  className,
  style,
  onChangeScore,
  nickname,
}: AskCommentProps) => {
  return (
    <AskCommentWrap id={id} className={className} style={style}>
      <Image
        alt="profile_img"
        src={profileImg}
        width={42}
        height={42}
        style={{ borderRadius: 21 }}
      />
      <p className="text">
        <b>{nickname}</b>님의 후기를 남겨주세요.
      </p>
      <Star defaultValue={0} onChange={onChangeScore} size={46} />
    </AskCommentWrap>
  );
};

export default AskComment;

const AskCommentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    margin-top: 12px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 27px;
    b {
      font-weight: 600;
      color: var(--red_1);
    }
  }
`;
