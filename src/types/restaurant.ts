import menuTypes from "./menu";

namespace restaurantTypes {
  export interface restaurantProps {
    id: number;
    createdAt: string;
    updatedAt: string;
    stars: number | null;
    name: string;
    detail: string;
    addr1: string;
    addr2: string;
    lat: number;
    lng: number;
    imageUrl: string;
    lunchPrice: number;
    menus: menuTypes.menuDetailProps[];
  }
}

export default restaurantTypes;
