import Link from "next/link";
import { useRouter } from "next/router";
import { emptyPinIcon, tagIcon } from "src/assets";
import { AskComment } from "src/components/organisms";
import { restaurantTypes } from "src/types";
import styled from "styled-components";
import CommentList from "../commentList";
import MenuInfoList from "../menuInfoList";

interface RestaurantDetailProps {
  restaurantInfo: restaurantTypes.restaurantProps;
  onLikeMenu: (menuId: number) => void;
  nickname: string;
  email: string;
  imageUrl: string;
  onChangeScore: (score: number) => void;
  onClickCommentDelete: (cid: number) => void;
}
const RestaurantDetail = ({
  restaurantInfo,
  onLikeMenu,
  nickname,
  email,
  imageUrl,
  onChangeScore,
  onClickCommentDelete,
}: RestaurantDetailProps) => {
  const router = useRouter();
  const handleChangeScore = (score: number) => {
    onChangeScore(score);
    router.push(`/comment/${router.query.id}`);
  };

  return (
    <RestaurantDetailWrap>
      <ProfileWrap src={restaurantInfo.imageUrl}>
        <div className="profile">
          <p className="name">{restaurantInfo.name}</p>
          <div className="text">
            <img className="pin_icon" alt="pin_icon" src={emptyPinIcon} />
            <p>{`${restaurantInfo.addr1} ${restaurantInfo.addr2}`}</p>
          </div>
          <div className="text">
            <img className="tag_icon" alt="tag_icon" src={tagIcon} />
            <p>{restaurantInfo.lunchPrice}원</p>
          </div>
        </div>
      </ProfileWrap>
      <MenuWrap>
        <MenuInfoList
          totalCount={restaurantInfo.menus.length}
          menuInfos={restaurantInfo.menus.slice(0, 3)}
          onLikeMenu={onLikeMenu}
        />
        <ShowMore url={`/map/${router.query.id}/menu`} text="메뉴 더보기" />
      </MenuWrap>
      {!restaurantInfo.hasCommented && (
        <>
          <DivideSection />
          <AskCommentWrap>
            <AskComment
              onChangeScore={handleChangeScore}
              nickname={nickname}
              imageUrl={imageUrl}
            />
          </AskCommentWrap>
        </>
      )}
      <DivideSection />
      <CommentWrap>
        <CommentList
          comments={restaurantInfo.comments.slice(0, 3)}
          onClickDelete={onClickCommentDelete}
        >
          <CommentList.TotalScore totalScore={restaurantInfo.stars || 0} />
          <CommentList.DefaultComments email={email} />
        </CommentList>
        {restaurantInfo.comments.length !== 0 && (
          <ShowMore
            url={`/map/${router.query.id}/comment`}
            text="후기 더보기"
          />
        )}
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

interface ProfileWrapProps {
  src?: string;
}
const ProfileWrap = styled.section<ProfileWrapProps>`
  width: 100%;
  height: 365px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src}) center center / cover, var(--gray_7);
  padding: 33px;
  display: flex;
  align-items: flex-end;
  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      color: var(--white);
      font-size: 14px;
    }
    .name {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 17px;
      margin-left: 3px;
    }
    .text {
      margin-bottom: 9px;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 13px;
        margin-right: 5px;
      }
    }
  }
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
