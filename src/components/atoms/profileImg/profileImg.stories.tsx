import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileImg from ".";

export default {
  title: "components/atoms/ProfileImg",
  component: ProfileImg,
} as ComponentMeta<typeof ProfileImg>;

const Template: ComponentStory<typeof ProfileImg> = (args) => (
  <ProfileImg {...args} />
);

export const DefaultProfileImg = Template.bind({});
DefaultProfileImg.args = {
  src: "https://image.dongascience.com/Photo/2020/03/15856430426741.jpg",
  size: 86,
};
