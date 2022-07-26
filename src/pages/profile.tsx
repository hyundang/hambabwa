import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { categoryApi, menuApi } from "src/apis";
import { selectedMenuProps } from "src/components/organisms/chooseCategory";
import { Profile } from "src/components/templates";
import { categoryTypes, menuTypes } from "src/types";

interface ProfilePageProps {
  categoryList: categoryTypes.getCategoryResProps[];
}
const ProfilePage = ({ categoryList }: ProfilePageProps) => {
  //   const { data: categoryList, isLoading: isCategoryListLoading } = useQuery<
  //     categoryTypes.getCategoryResProps[],
  //     AxiosError
  //   >("/category", categoryApi.getCategory);
  const [category, setCategory] = useState("");
  const { data: menuList, isLoading: isMenuListLoading } = useQuery<
    menuTypes.getMenuByCategoryResProps[],
    AxiosError
  >(["/category", category], () => menuApi.getMenuByCategory(category));

  const [menu, setMenu] = useState<selectedMenuProps[]>([]);
  useEffect(() => {
    setMenu(
      categoryList.map((c) => ({
        categoryCode: c.code,
        menuCodes: [],
      }))
    );
  }, []);

  if (isMenuListLoading) return <div>...Loading</div>;
  return (
    <Profile
      categoryList={categoryList || []}
      menuList={menuList || []}
      selectedCategory={category}
      setSelectedCategory={setCategory}
      selectedMenus={menu}
      setSelectedMenus={setMenu}
    />
  );
};

export default ProfilePage;

export const getServerSideProps = async () => {
  const categoryList = await categoryApi.getCategory();
  return {
    props: {
      categoryList,
    },
  };
};
