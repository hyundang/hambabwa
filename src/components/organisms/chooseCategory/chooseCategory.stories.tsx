import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useEffect, useState } from "react";
import { categoryData, menuData } from "src/mocks/data";
import ChooseCategory, { selectedMenuProps } from ".";

export default {
  title: "components/organisms/ChooseCategory",
  component: ChooseCategory,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof ChooseCategory>;

const Template: ComponentStory<typeof ChooseCategory> = (args) => {
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
    <ChooseCategory
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
  userEvent.click(canvas.getByText("김치국"));
  userEvent.click(canvas.getByText("완료"));
};
