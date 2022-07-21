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
