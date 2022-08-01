import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from ".";

export default {
  title: "components/molecules/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: "로그인",
};

export const RestaurantDetailHeader: ComponentStory<typeof Header> = (args) => {
  return (
    <Header title="언더그라운드" isBackActive>
      <Header.ProfileImg imageUrl="https://image.dongascience.com/Photo/2020/03/15856430426741.jpg" />
    </Header>
  );
};
