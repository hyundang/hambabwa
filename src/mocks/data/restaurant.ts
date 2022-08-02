import { restaurantTypes } from "src/types";
import menuData from "./menu";

const getComment: restaurantTypes.menuCommentProps = {
  id: 1,
  createdAt: "2022-07-27T05:35:03.693Z",
  updatedAt: "2022-07-27T05:35:03.693Z",
  comment:
    "흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥",
  stars: 4.5,
  writer: {
    email: "test@hambabwa.kr",
    nickname: "김지원",
    imageUrl:
      "https://image.hambabwa.kr/prod/restaurant/b971effe-e538-4703-b1af-a7b2131cb752.png",
  },
};
const getComment_long: restaurantTypes.menuCommentProps = {
  id: 2,
  createdAt: "2022-07-27T05:35:03.693Z",
  updatedAt: "2022-07-27T05:35:03.693Z",
  comment:
    "흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥흥해라흥",
  stars: 4.5,
  writer: {
    email: "test@hambabwa.kr",
    nickname: "김지원",
    imageUrl:
      "https://image.hambabwa.kr/prod/restaurant/b971effe-e538-4703-b1af-a7b2131cb752.png",
  },
};
const getComment_short: restaurantTypes.menuCommentProps = {
  id: 3,
  createdAt: "2022-07-27T05:35:03.693Z",
  updatedAt: "2022-07-27T05:35:03.693Z",
  comment: "흥해라흥",
  stars: 4.5,
  writer: {
    email: "test@hambabwa.kr",
    nickname: "김지원",
    imageUrl:
      "https://image.hambabwa.kr/prod/restaurant/b971effe-e538-4703-b1af-a7b2131cb752.png",
  },
};

const getComments: restaurantTypes.menuCommentProps[] = [
  getComment,
  getComment_short,
  getComment_long,
];

const getDefaultRestaurant: restaurantTypes.defaultRestaurntProps = {
  id: 1,
  createdAt: "2022-07-15T09:45:20.345Z",
  updatedAt: "2022-07-27T05:35:03.000Z",
  stars: 4.5,
  name: "오늘통닭",
  detail: "이러저러하고 저러저러한 상세설명",
  addr1: "서울특별시 서초구 서초대로74길 33",
  addr2: "비트빌빌딩 1층",
  lat: 37.4946203470469,
  lng: 127.027606136235,
  imageUrl:
    "https://image.hambabwa.kr/prod/restaurant/b971effe-e538-4703-b1af-a7b2131cb752.png",
  lunchPrice: 8000,
  menus: menuData.getMenuDetails,
};
const getDefaultRestaurant_2: restaurantTypes.defaultRestaurntProps = {
  ...getDefaultRestaurant,
  id: 2,
  name: "오늘통닭2",
  lat: 37.4944203470469,
  lng: 127.027506136235,
};
const getDefaultRestaurant_3: restaurantTypes.defaultRestaurntProps = {
  ...getDefaultRestaurant,
  id: 3,
  name: "오늘통닭3",
  lat: 37.4953203470469,
  lng: 127.027906136235,
};

const getDefaultRestaurants: restaurantTypes.defaultRestaurntProps[] = [
  getDefaultRestaurant,
  getDefaultRestaurant_2,
  getDefaultRestaurant_3,
];

const getRestaurant: restaurantTypes.restaurantProps = {
  ...getDefaultRestaurant,
  comments: getComments,
  hasCommented: false,
};

const getRestaurants: restaurantTypes.restaurantProps[] = [
  getRestaurant,
  getRestaurant,
];

const restaurantData = {
  getComment,
  getComments,
  getRestaurant,
  getRestaurants,
  getDefaultRestaurant,
  getDefaultRestaurants,
};

export default restaurantData;
