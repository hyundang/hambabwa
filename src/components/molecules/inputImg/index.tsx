import { ChangeEvent, HTMLAttributes, useRef, useState } from "react";
import { cameraIcon, profileImg } from "src/assets";
import styled from "styled-components";

interface InputImgProps extends HTMLAttributes<HTMLDivElement> {
  imgUrl?: string;
  onChangeImg: (file: File) => void;
}
const InputImg = ({
  id,
  className,
  style,
  imgUrl,
  onChangeImg,
}: InputImgProps) => {
  const img_input = useRef<HTMLInputElement>(null);
  const initializeInputTargetValue = () => {
    if (img_input.current) img_input.current.value = "";
  };

  const [profileUrl, setProfileUrl] = useState<string>(imgUrl || profileImg);
  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChangeImg(e.target.files[0]);
      setProfileUrl(URL.createObjectURL(e.target.files[0]));
    }
    initializeInputTargetValue();
  };

  return (
    <InputImgWrap
      id={id}
      className={className}
      style={style}
      imgUrl={profileUrl}
    >
      <label className="input_img_wrap" htmlFor="img_input">
        <img className="camera_icon" alt="camera_icon" src={cameraIcon} />
        <input
          type="file"
          id="img_input"
          accept="image/jpeg, image/jpg, image/png"
          ref={img_input}
          onChange={handleChangeImg}
          style={{ width: "0", height: "0" }}
        />
      </label>
    </InputImgWrap>
  );
};

export default InputImg;

interface InputImgWrapProps {
  imgUrl: string;
}
const InputImgWrap = styled.div<InputImgWrapProps>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ imgUrl }) => imgUrl}) center center / cover;

  .input_img_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .camera_icon {
      width: 32px;
      height: 32px;
    }
  }
`;
