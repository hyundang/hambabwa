import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyPage from ".";

export default {
  title: "components/templates/MyPage",
  component: MyPage,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof MyPage>;

const Template: ComponentStory<typeof MyPage> = (args) => <MyPage {...args} />;

export const DefaultMyPage = Template.bind({});
DefaultMyPage.args = {
  nickname: "함바바",
};
