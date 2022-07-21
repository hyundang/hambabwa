import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useInput } from "src/hooks";
import styled from "styled-components";
import InputForm from ".";

export default {
  title: "components/molecules/InputForm",
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const StyledInputForm = styled(InputForm)`
  .input {
    font-size: 15px;
  }
`;

const Template: ComponentStory<typeof InputForm> = (args) => {
  const { value, onChange } = useInput("");
  return <StyledInputForm {...args} value={value} onChange={onChange} />;
};

export const EmailInputForm = Template.bind({});
EmailInputForm.args = {
  placeholder: "이메일",
  type: "email",
  isError: false,
  errorMsg: "잘못된 이메일 형식입니다",
};
