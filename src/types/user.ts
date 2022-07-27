import menuTypes from "./menu";

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
    role: "admin";
    imageUrl: string;
  }

  export interface postProfileListResProps extends userProps {
    favorites: menuTypes.menuItemProps[];
  }
}

export default userTypes;
