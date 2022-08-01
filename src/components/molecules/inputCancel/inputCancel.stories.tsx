import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useInput } from "src/hooks";
import InputCancel from ".";

export default {
  title: "components/molecules/InputCancel",
  component: InputCancel,
  decorators: [
    (story) => <div style={{ width: "250px", height: "60px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof InputCancel>;

const Template: ComponentStory<typeof InputCancel> = (args) => {
  const { value, onChange, setValue } = useInput("");
  return (
    <InputCancel
      {...args}
      value={value}
      onChange={onChange}
      setValue={setValue}
    />
  );
};

export const DefaultInputCancel = Template.bind({});
DefaultInputCancel.args = {
  placeholder: "닉네임을 입력해주세요.",
  left: 250,
};

export const ErrorInputCancel = Template.bind({});
ErrorInputCancel.args = {
  placeholder: "닉네임을 입력해주세요.",
  left: 250,
  isError: true,
  errorText: "닉네임은 최대 20자까지 가능합니다.",
};
