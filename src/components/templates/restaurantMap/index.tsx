import { useRouter } from "next/router";
import { ProfileImg } from "src/components/atoms";
import { Map } from "src/components/organisms";
import { restaurantTypes } from "src/types";
import styled from "styled-components";

interface RestaurantMapProps {
  imageUrl: string;
  restaurants: restaurantTypes.defaultRestaurntProps[];
}
const RestaurantMap = ({ imageUrl, restaurants }: RestaurantMapProps) => {
  const router = useRouter();
  const handleRoute = () => router.push("/mypage");
  return (
    <RestaurantMapWrap>
      <div className="profile_img" onClick={handleRoute}>
        <ProfileImg src={imageUrl} size={60} />
      </div>
      <Map restaurants={restaurants} />
    </RestaurantMapWrap>
  );
};

export default RestaurantMap;

const RestaurantMapWrap = styled.div`
  width: 100%;
  height: 100%;

  .profile_img {
    position: absolute;
    z-index: 2;
    top: 40px;
    right: 25px;
  }
`;
