import { GetServerSideProps } from "next";
import { MyPage as MyPageTemplate } from "src/components/templates";
import nextCookies from "next-cookies";
import { useState } from "react";
import { userApi } from "src/apis";
import { saveDataInCookie } from "src/utils";

interface MyPageProps {
  initNickname: string;
  initImageUrl: string;
}
const MyPage = ({ initNickname, initImageUrl }: MyPageProps) => {
  const [imageUrl, setImageUrl] = useState(initImageUrl);
  const [nickname, setNickname] = useState(initNickname);

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
    }
  };

  return (
    <MyPageTemplate
      nickname={nickname}
      imageUrl={imageUrl}
      onClickEdit={handleClickEdit}
    />
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
