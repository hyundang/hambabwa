import menuTypes from "./menu";

namespace userTypes {
  export interface postProfileListReqProps {
    menuIds: string;
  }

  export interface postProfileListResProps {
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    nickname: string;
    role: "admin";
    imageUrl: string;
    favorites: menuTypes.menuItemProps[];
  }
}

export default userTypes;
