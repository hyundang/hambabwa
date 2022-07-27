import { MapMarker as KakaoMapMarker } from "react-kakao-maps-sdk";
import { pinIcon } from "src/assets";

interface MapMarkerProps {
  lat: number;
  lng: number;
}
const MapMarker = ({ lat, lng }: MapMarkerProps) => {
  return (
    <KakaoMapMarker
      position={{ lat, lng }}
      image={{
        src: pinIcon,
        size: {
          width: 27,
          height: 27,
        },
      }}
    />
  );
};

export default MapMarker;
