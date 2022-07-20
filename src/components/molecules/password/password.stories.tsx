import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useInput } from "src/hooks";
import styled from "styled-components";
import Password from ".";

export default {
  title: "components/molecules/Password",
  component: Password,
} as ComponentMeta<typeof Password>;

const StyledPassword = styled(Password)`
  width: 324px;
  height: 26px;
  font-size: 15px;
`;

const Template: ComponentStory<typeof Password> = (args) => {
  const { value, onChange } = useInput("");
  return <StyledPassword {...args} value={value} onChange={onChange} />;
};

export const DisabledPassword = Template.bind({});
DisabledPassword.args = {
  placeholder: "비밀번호",
  type: "password",
  value: "",
};

export const ActivePassword = Template.bind({});
ActivePassword.args = {
  placeholder: "비밀번호",
  type: "text",
};
