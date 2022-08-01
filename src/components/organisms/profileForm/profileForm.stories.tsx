import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileForm from ".";

export default {
  title: "components/organisms/ProfileForm",
  component: ProfileForm,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof ProfileForm>;

const Template: ComponentStory<typeof ProfileForm> = (args) => (
  <ProfileForm {...args} />
);

export const MyProfileImg = Template.bind({});
MyProfileImg.args = {
  imageUrl: "https://image.dongascience.com/Photo/2020/03/15856430426741.jpg",
  nickname: "함바바",
};
