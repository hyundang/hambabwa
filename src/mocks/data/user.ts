import { userTypes } from "src/types";

const getUserProfile: userTypes.userProps = {
  id: 1,
  createdAt: "2022-07-20T11:45:07.482Z",
  updatedAt: "2022-07-20T18:07:25.000Z",
  email: "test@email.com",
  nickname: "함바",
  role: "user",
  imageUrl:
    "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/uh5t2hha/0e8d4ee6af1a4d47812f0d18a93b58d7.jpg",
};

const getMyComment: userTypes.myCommentProps = {
  id: 10,
  createdAt: "2022-07-29T02:24:10.853Z",
  updatedAt: "2022-07-29T02:24:10.853Z",
  comment: "냠냠긋",
  stars: 5,
  restaurant: {
    id: 1,
    createdAt: "2022-07-15T09:45:20.345Z",
    updatedAt: "2022-07-29T03:20:37.000Z",
    stars: 4.75,
    name: "오늘통닭",
    detail: "이러저러하고 저러저러한 상세설명",
    addr1: "서울특별시 서초구 서초대로74길 33",
    addr2: "비트빌빌딩 1층",
    lat: 37.4946203470469,
    lng: 127.027606136235,
    imageUrl: "https://image.hambabwa.kr/prod/restaurant/b971effe-e538-4703-b1af-a7b2131cb752.png",
    lunchPrice: 8000,
  },
};

const getMyComment_long: userTypes.myCommentProps = {
  id: 10,
  createdAt: "2022-07-29T02:24:10.853Z",
  updatedAt: "2022-07-29T02:24:10.853Z",
  comment:
    "냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋냠냠긋",
  stars: 5,
  restaurant: {
    id: 1,
    createdAt: "2022-07-15T09:45:20.345Z",
    updatedAt: "2022-07-29T03:20:37.000Z",
    stars: 4.75,
    name: "오늘통닭",
    detail: "이러저러하고 저러저러한 상세설명",
    addr1: "서울특별시 서초구 서초대로74길 33",
    addr2: "비트빌빌딩 1층",
    lat: 37.4946203470469,
    lng: 127.027606136235,
    imageUrl: "https://image.hambabwa.kr/prod/restaurant/b971effe-e538-4703-b1af-a7b2131cb752.png",
    lunchPrice: 8000,
  },
};

const getMyComments: userTypes.myCommentProps[] = [
  getMyComment,
  getMyComment_long,
  getMyComment,
  getMyComment_long,
];

const userData = {
  getUserProfile,
  getMyComment,
  getMyComments,
};
export default userData;
