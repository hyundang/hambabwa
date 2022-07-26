namespace menuTypes {
  export interface menuItemProps {
    calorie: string;
    createdAt: string;
    updatedAt: string;
    foodCode: string;
    foodTitle: string;
    id: number;
    imageUrl: string;
    isRepresentative: "Y" | "N";
    menuCategoryCode: string;
  }

  export interface menuDetailProps {
    menuId: number;
    title: string;
    menuImage: string;
    subTitle: string;
    calorie: string;
    categoryDepth1: string;
    categoryDepth2: string;
    categoryDepth3: string;
  }
}

export default menuTypes;
