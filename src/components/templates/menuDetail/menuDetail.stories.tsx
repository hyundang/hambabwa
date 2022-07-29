import { ComponentMeta, ComponentStory } from "@storybook/react";
import { menuData } from "src/mocks/data";
import MenuDetail from ".";

export default {
  title: "components/templates/MenuDetail",
  component: MenuDetail,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof MenuDetail>;

const Template: ComponentStory<typeof MenuDetail> = (args) => (
  <MenuDetail {...args} />
);

export const DefaultMenuDetail = Template.bind({});
DefaultMenuDetail.args = {
  menuInfos: menuData.getMenuDetails,
  onLikeMenu: () => "hi",
};
