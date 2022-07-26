import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { categoryApi, menuApi, userApi } from "src/apis";
import { selectedMenuProps } from "src/components/organisms/chooseCategory";
import { Profile } from "src/components/templates";
import { categoryTypes, menuTypes } from "src/types";
import { saveDataInCookie } from "src/utils";

interface ProfilePageProps {
  categoryList: categoryTypes.getCategoryResProps[];
}
const ProfilePage = ({ categoryList }: ProfilePageProps) => {
  const [category, setCategory] = useState("");
  const { data: menuList, refetch } = useQuery<
    menuTypes.menuItemProps[],
    AxiosError
  >(["/category", category], () => menuApi.getMenuByCategory(category), {
    enabled: false,
  });
  const handleSelectCategory = async (code: string) => {
    await setCategory(code);
    refetch();
  };

  const [menus, setMenus] = useState<selectedMenuProps[]>([]);
  useEffect(() => {
    setMenus(
      categoryList.map((c) => ({
        categoryCode: c.code,
        menuCodes: [],
      }))
    );
  }, []);

  const router = useRouter();
  const handleClickNext = async () => {
    let body: string[] = [];
    menus.forEach((menu) => {
      body = [...body, ...menu.menuCodes];
    });
    const data = await userApi.postProfileList({ menuIds: body.join(",") });
    saveDataInCookie("isProfileWritten", true);
    saveDataInCookie("nickname", data.nickname);
    saveDataInCookie("imageUrl", data.imageUrl);
    router.replace("/map");
  };

  return (
    <Profile
      categoryList={categoryList || []}
      menuList={menuList || []}
      selectedCategory={category}
      setSelectedCategory={handleSelectCategory}
      selectedMenus={menus}
      setSelectedMenus={setMenus}
      onClickNext={handleClickNext}
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
