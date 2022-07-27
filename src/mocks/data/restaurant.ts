const getRestaurant = [
  {
    id: 1,
    createdAt: "2022-07-15T09:45:20.345Z",
    updatedAt: "2022-07-15T09:45:20.345Z",
    stars: null,
    name: "오늘통닭",
    detail: "이러저러하고 저러저러한 상세설명",
    addr1: "서울특별시 서초구 서초대로74길 33",
    addr2: "비트빌빌딩 1층",
    lat: 37.4946203470469,
    lng: 127.027606136235,
    imageUrl:
      "https://image.hambabwa.kr/prod/restaurant/b971effe-e538-4703-b1af-a7b2131cb752.png",
    lunchPrice: 8000,
    menus: [
      {
        menuId: 1,
        title: "김치국",
        menuImage: "https://image.hambabwa.kr/dev/menu/gimchigug.jpeg",
        subTitle: "김치국",
        calorie: "23Kcal",
        categoryDepth1: "국 및 탕류",
        categoryDepth2: "해당없음",
        categoryDepth3: "해당없음",
      },
      {
        menuId: 2,
        title: "김치국_콩나물",
        menuImage: "https://image.hambabwa.kr/dev/menu/gimchigug.jpeg",
        subTitle: "김치국",
        calorie: "12Kcal",
        categoryDepth1: "국 및 탕류",
        categoryDepth2: "콩나물",
        categoryDepth3: "해당없음",
      },
    ],
  },
];

const restaurantData = {
  getRestaurant,
};

export default restaurantData;
