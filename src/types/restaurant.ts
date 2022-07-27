import menuTypes from "./menu";
import userTypes from "./user";

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
    comments: menuCommentProps[];
    menus: menuTypes.menuDetailProps[];
  }

  interface defaultCommentProps {
    id: number;
    createdAt: string;
    updatedAt: string;
    comment: string;
    stars: number;
  }

  export interface menuCommentProps extends defaultCommentProps {
    writer: {
      email: string;
      nickname: string;
    };
  }

  export interface postCommentReqProps {
    restaurnatId: number;
    comment: string;
    stars: number;
  }
  export interface postCommentResProps extends defaultCommentProps {
    restaurant: {
      id: number;
    };
    writer: userTypes.userProps;
  }
}

export default restaurantTypes;
