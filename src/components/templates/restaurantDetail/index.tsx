import Link from "next/link";
import { useRouter } from "next/router";
import { AskComment } from "src/components/organisms";
import { restaurantTypes } from "src/types";
import styled from "styled-components";
import CommentList from "../commentList";
import MenuInfoList from "../menuInfoList";

interface RestaurantDetailProps {
  restaurantInfo: restaurantTypes.restaurantProps;
  onLikeMenu: (menuId: number) => void;
  nickname: string;
}
const RestaurantDetail = ({
  restaurantInfo,
  onLikeMenu,
  nickname,
}: RestaurantDetailProps) => {
  const router = useRouter();
  const handleChangeScore = () => {
    router.push("/review");
  };
  return (
    <RestaurantDetailWrap>
      <DivideSection />
      <MenuWrap>
        <MenuInfoList
          menuInfos={restaurantInfo.menus}
          onLikeMenu={onLikeMenu}
        />
        <ShowMore url="/menu" text="메뉴 더보기" />
      </MenuWrap>
      <DivideSection />
      <AskCommentWrap>
        <AskComment onChangeScore={handleChangeScore} nickname={nickname} />
      </AskCommentWrap>
      <DivideSection />
      <CommentWrap>
        <CommentList
          totalScore={restaurantInfo.stars || 0}
          comments={restaurantInfo.comments}
        />
        <ShowMore url="/comment" text="후기 더보기" />
      </CommentWrap>
    </RestaurantDetailWrap>
  );
};
export default RestaurantDetail;

interface ShowMoreProps {
  url: string;
  text: string;
}
const ShowMore = ({ url, text }: ShowMoreProps) => {
  return (
    <Link href={url}>
      <Text>{text} &gt;</Text>
    </Link>
  );
};

const Text = styled.p`
  width: 100;
  height: 40px;
  line-height: 40px;
  text-align: right;
  padding-right: 2px;
  font-weight: 500;
  font-size: 14px;
  color: var(--gray_2);
`;

const RestaurantDetailWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const MenuWrap = styled.section`
  width: 100%;
  padding: 21px 25px 13px 25px;
`;

const AskCommentWrap = styled.section`
  width: 100%;
  padding: 29px 25px 42px 25px;
`;

const CommentWrap = styled.section`
  width: 100%;
  padding: 21px 25px 80px 25px;
`;

const DivideSection = styled.div`
  width: 100%;
  height: 12px;
  background-color: var(--gray_7);
`;
