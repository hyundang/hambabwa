import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useEffect, useState } from "react";
import { menuData } from "src/mocks/data";
import { menuTypes } from "src/types";
import MenuMoal from ".";

export default {
  title: "components/organisms/MenuMoal",
  component: MenuMoal,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof MenuMoal>;

const Template: ComponentStory<typeof MenuMoal> = (args) => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (menuCode: string) => () => {
    if (selected.includes(menuCode))
      setSelected(selected.filter((s) => s !== menuCode));
    else setSelected(selected.concat([menuCode]));
  };
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <MenuMoal
      {...args}
      menuList={menuData.getMenuRes}
      selected={selected}
      onSelectMenu={handleSelect}
    />
  );
};
export const Default = Template.bind({});

export const ClickCategory = Template.bind({});
ClickCategory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByText("밥류"));
};
