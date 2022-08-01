import { GetServerSideProps } from "next";
import { RestaurantMap } from "src/components/templates";
import { useToastMsg } from "src/hooks";
import nextCookies from "next-cookies";
import { useQuery } from "react-query";
import { restaurantApi } from "src/apis";
import { ToastMsg } from "src/components/molecules";

interface MapPageProps {
  imageUrl: string;
}
const MapPage = ({ imageUrl }: MapPageProps) => {
  const {
    isLoading,
    isError,
    data: restaurants,
  } = useQuery("myComments", restaurantApi.getRestaurants);

  const { isToastMsgActive, handleToastMsg } = useToastMsg("copyToClipboard");

  if (isLoading) return <div>...loading</div>;
  if (isError) throw new Error("error");
  if (restaurants)
    return (
      <>
        <RestaurantMap imageUrl={imageUrl} restaurants={restaurants} />
        <ToastMsg
          isActive={isToastMsgActive.copyToClipboard}
          setIsActive={handleToastMsg}
          text="😀 클립보드에 복사되었어요!"
        />
      </>
    );
};

export default MapPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookies(ctx);
  const { imageUrl } = allCookies;
  return {
    props: {
      imageUrl,
    },
  };
};
