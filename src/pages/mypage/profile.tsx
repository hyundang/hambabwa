import { AxiosError } from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { categoryApi, client, menuApi, userApi } from "src/apis";
import { auth } from "src/apis/auth";
import { selectedMenuProps } from "src/components/organisms/chooseCategory";
import { Profile } from "src/components/templates";
import { categoryTypes, menuTypes } from "src/types";

interface ProfilePageProps {
  categoryList: categoryTypes.getCategoryResProps[];
  favorites: menuTypes.menuItemProps[];
}
const ProfilePage = ({ categoryList, favorites }: ProfilePageProps) => {
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
    const userProfile = categoryList.map((c) => {
      const menuCodes: string[] = favorites.reduce<string[]>((acc, cur) => {
        if (cur.menuCategoryCode === c.code) acc.push(`${cur.id}`);
        return acc;
      }, []);
      return { categoryCode: c.code, menuCodes };
    });
    setMenus(userProfile);
  }, []);

  const router = useRouter();
  const handleClickNext = async () => {
    let body: string[] = [];
    menus.forEach((menu) => {
      body = [...body, ...menu.menuCodes];
    });
    await userApi.postProfileList({ menuIds: body.join(",") });
    router.back();
  };

  return (
    <Profile
      isMyPage
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.headers.cookie) {
    auth.defaults.headers.common.Cookie = req.headers.cookie;
    client.defaults.headers.common.Cookie = req.headers.cookie;
  }
  const categoryList = await categoryApi.getCategory();
  const { favorites } = await userApi.getProfileList();
  return {
    props: {
      categoryList,
      favorites,
    },
  };
};
