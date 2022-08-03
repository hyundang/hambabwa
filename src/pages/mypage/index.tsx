import { GetServerSideProps } from "next";
import { MyPage as MyPageTemplate } from "src/components/templates";
import nextCookies from "next-cookies";
import { useState } from "react";
import { userApi } from "src/apis";
import { saveDataInCookie } from "src/utils";
import { useToastMsg } from "src/hooks";
import { ToastMsg } from "src/components/molecules";

interface MyPageProps {
  initNickname: string;
  initImageUrl: string;
}
const MyPage = ({ initNickname, initImageUrl }: MyPageProps) => {
  const [imageUrl, setImageUrl] = useState(initImageUrl);
  const [nickname, setNickname] = useState(initNickname);

  const { isToastMsgActive, handleToastMsg } = useToastMsg("editProfile");
  const handleClickEdit = async (newNickname: string, file?: File) => {
    if (file) {
      const data = await userApi.postMyProfile({
        nickname: newNickname,
        imageUrl: file,
      });
      saveDataInCookie("nickname", data.nickname);
      setNickname(data.nickname);
      saveDataInCookie("imageUrl", data.imageUrl);
      setImageUrl(data.imageUrl);
      handleToastMsg(true);
    }
  };

  return (
    <>
      <MyPageTemplate
        nickname={nickname}
        imageUrl={imageUrl}
        onClickEdit={handleClickEdit}
      />
      <ToastMsg
        isActive={isToastMsgActive.editProfile}
        setIsActive={handleToastMsg}
        text="😀 프로필을 수정했어요!"
      />
    </>
  );
};

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookies(ctx);
  const { nickname: initNickname, imageUrl: initImageUrl } = allCookies;
  return {
    props: {
      initNickname,
      initImageUrl,
    },
  };
};
