import { ComponentMeta, ComponentStory } from "@storybook/react";
import { menuData } from "src/mocks/data";
import MenuInfo from ".";

export default {
  title: "components/organisms/MenuInfo",
  component: MenuInfo,
  decorators: [
    (story) => <div style={{ width: "340px", height: "120px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof MenuInfo>;

const Template: ComponentStory<typeof MenuInfo> = (args) => (
  <MenuInfo {...args} />
);

export const DefaultMenuInfo = Template.bind({});
DefaultMenuInfo.args = {
  menuInfo: menuData.getMenuDetails[0],
  onClickLike: () => "hi",
};
