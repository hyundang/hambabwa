import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useInput } from "src/hooks";
import styled from "styled-components";
import Input from ".";

export default {
  title: "components/atoms/Input",
  component: Input,
  parameters: {
    actions: {
      handles: ["click CheckBox"],
    },
  },
} as ComponentMeta<typeof Input>;

const StyledInput = styled(Input)`
  width: 324px;
  height: 26px;
  font-size: 15px;
`;

const Template: ComponentStory<typeof Input> = (args) => {
  const { value, onChange } = useInput("");
  return <StyledInput {...args} value={value} onChange={onChange} />;
};

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  placeholder: "기본",
  type: "text",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  placeholder: "이메일",
  type: "email",
  value: "",
};
