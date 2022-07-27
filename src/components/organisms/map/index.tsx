/* global kakao */
import { HTMLAttributes, useRef } from "react";
import styled from "styled-components";
import {
  CustomOverlayMap,
  Map as KaKaoMap,
  useInjectKakaoMapApi,
} from "react-kakao-maps-sdk";
import { useWindowSize } from "src/hooks";
import { pinIcon } from "src/assets";
import InfoWindow from "src/components/organisms/infoWindow";
import { restaurantData } from "src/mocks/data";
import { MapMarker } from "src/components/atoms";

interface MapProps extends HTMLAttributes<HTMLDivElement> {
  hi?: boolean;
}
const Map = ({ id, className, style, hi }: MapProps) => {
  const { height } = useWindowSize();

  const { loading, error } = useInjectKakaoMapApi({
    appkey: KAKAO_APP_KEY,
  });
  if (loading) return <div>loading</div>;
  if (error) throw new Error("map error");
  return (
    <MapWrap id={id} className={className} style={style}>
      <KaKaoMap
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height }}
        level={1}
      >
        <MapMarker lat={33.5563} lng={126.79581} />
        <CustomOverlayMap position={{ lat: 33.5563, lng: 126.79581 }}>
          <InfoWindowWrap>
            <InfoWindow restaurantInfo={restaurantData.getRestaurant[0]} />
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
