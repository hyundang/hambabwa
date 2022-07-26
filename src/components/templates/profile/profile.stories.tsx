import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useEffect, useState } from "react";
import { selectedMenuProps } from "src/components/organisms/chooseCategory";
import { categoryData, menuData } from "src/mocks/data";
import Profile from ".";

export default {
  title: "components/templates/Profile",
  component: Profile,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => {
  const [category, setCategory] = useState("");
  const [menu, setMenu] = useState<selectedMenuProps[]>([]);
  useEffect(() => {
    setMenu(
      categoryData.getCategoryRes.map((c) => ({
        categoryCode: c.code,
        menuCodes: [],
      }))
    );
  }, []);
  // const handle
  return (
    <Profile
      {...args}
      categoryList={categoryData.getCategoryRes}
      menuList={menuData.getMenuRes}
      selectedCategory={category}
      setSelectedCategory={setCategory}
      selectedMenus={menu}
      setSelectedMenus={setMenu}
    />
  );
};
export const Default = Template.bind({});

export const ClickCategory = Template.bind({});
ClickCategory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByText("밥류"));
};
