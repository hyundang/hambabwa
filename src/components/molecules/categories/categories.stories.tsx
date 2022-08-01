import { ComponentMeta, ComponentStory } from "@storybook/react";
import { categoryData } from "src/mocks/data";
import Categories from ".";

export default {
  title: "components/molecules/Categories",
  component: Categories,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Categories>;

const Template: ComponentStory<typeof Categories> = (args) => (
  <Categories {...args} categoryList={categoryData.getCategoryRes} />
);

export const DefaultCategories = Template.bind({});
DefaultCategories.args = {
  categoryList: categoryData.getCategoryRes,
};
