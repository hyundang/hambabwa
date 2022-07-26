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
}

export default menuTypes;
