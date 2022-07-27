import { ComponentMeta, ComponentStory } from "@storybook/react";
import { menuData } from "src/mocks/data";
import MenuInfoList from ".";

export default {
  title: "components/templates/MenuInfoList",
  component: MenuInfoList,
  decorators: [(story) => <div style={{ width: "340px" }}>{story()}</div>],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof MenuInfoList>;

const Template: ComponentStory<typeof MenuInfoList> = (args) => (
  <MenuInfoList {...args} />
);

export const DefaultMenuInfoList = Template.bind({});
DefaultMenuInfoList.args = {
  menuInfos: menuData.getMenuDetails,
  onLikeMenu: () => "hi",
};
