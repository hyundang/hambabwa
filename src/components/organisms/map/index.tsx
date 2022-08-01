/* global kakao */
import { HTMLAttributes, useState } from "react";
import styled from "styled-components";
import {
  CustomOverlayMap,
  Map as KaKaoMap,
  useInjectKakaoMapApi,
} from "react-kakao-maps-sdk";
import { useWindowSize } from "src/hooks";
import InfoWindow from "src/components/organisms/infoWindow";
import { MapMarker } from "src/components/atoms";
import { restaurantTypes } from "src/types";

interface MapProps extends HTMLAttributes<HTMLDivElement> {
  restaurants: restaurantTypes.defaultRestaurntProps[];
}
const Map = ({ id, className, style, restaurants }: MapProps) => {
  const { height } = useWindowSize();

  const [clickedRestaurant, setClickedRestaurant] = useState(restaurants[0]);
  const handleClickMarker = (idx: number) => () =>
    setClickedRestaurant(restaurants[idx]);

  const { loading, error } = useInjectKakaoMapApi({
    appkey: KAKAO_APP_KEY,
  });
  if (loading) return <div>loading</div>;
  if (error) throw new Error("map error");
  return (
    <MapWrap id={id} className={className} style={style}>
      <KaKaoMap
        center={{
          lat: clickedRestaurant.lat + 0.0002,
          lng: clickedRestaurant.lng,
        }}
        style={{ width: "100%", height }}
        level={1}
      >
        {restaurants.map((restaurant, idx) => (
          <MapMarker
            key={restaurant.id}
            lat={restaurant.lat}
            lng={restaurant.lng}
            onClick={handleClickMarker(idx)}
          />
        ))}
        <CustomOverlayMap
          position={{ lat: clickedRestaurant.lat, lng: clickedRestaurant.lng }}
        >
          <InfoWindowWrap>
            <InfoWindow restaurantInfo={clickedRestaurant} />
          </InfoWindowWrap>
        </CustomOverlayMap>
      </KaKaoMap>
    </MapWrap>
  );
};

export default Map;

const MapWrap = styled.section`
  width: 100%;
  height: 100%;
`;

const InfoWindowWrap = styled.div`
  width: 295px;
  height: 196px;
  position: relative;
  top: -130px;
`;
