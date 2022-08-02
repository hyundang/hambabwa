import menuTypes from "./menu";
import userTypes from "./user";

namespace authTypes {
  export interface postSignUpReqProps {
    email: string;
    password: string;
    nickname: string;
  }

  export interface postSignUpResProps {
    email: string;
    // password: string;
    nickname: string;
    currentHashedRefreshToken: string;
    id: number;
    createdAt: string;
    updatedAt: string;
  }

  export interface postSignInReqProps {
    email: string;
    password: string;
  }

  export interface postSignInResProps extends userTypes.userProps {
    favorites: menuTypes.menuItemProps[];
  }
}

export default authTypes;
