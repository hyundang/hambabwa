import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyProfileImg from ".";

export default {
  title: "components/molecules/MyProfileImg",
  component: MyProfileImg,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof MyProfileImg>;

const Template: ComponentStory<typeof MyProfileImg> = (args) => (
  <MyProfileImg {...args} />
);

export const DefaultMyProfileImg = Template.bind({});
DefaultMyProfileImg.args = {
  imageUrl: "https://image.dongascience.com/Photo/2020/03/15856430426741.jpg",
  size: 36,
};
