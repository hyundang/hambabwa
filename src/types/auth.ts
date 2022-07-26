namespace authTypes {
  export interface postSignUpReqProps {
    email: string;
    password: string;
    nickname: string;
  }

  export interface postSignUpResProps {
    email: string;
    password: string;
    nickname: string;
    currentHashedRefreshToken: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface postSignInReqProps {
    email: string;
    password: string;
  }

  export interface postSignInResProps {
    email: string;
    nickname: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }
}

export default authTypes;
