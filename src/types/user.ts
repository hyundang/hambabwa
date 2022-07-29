/* eslint-disable import/no-cycle */
import menuTypes from "./menu";
import restaurantTypes from "./restaurant";

namespace userTypes {
  export interface postProfileListReqProps {
    menuIds: string;
  }

  export interface userProps {
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    nickname: string;
    role: "admin" | "user";
    imageUrl: string;
  }

  export interface postProfileListResProps extends userProps {
    favorites: menuTypes.menuItemProps[];
  }

  export interface myCommentProps extends restaurantTypes.defaultCommentProps {
    restaurant: restaurantTypes.defaultRestaurntProps;
  }
  export interface getMyCommentsResProps extends userProps {
    comments: myCommentProps[];
  }
}

export default userTypes;
