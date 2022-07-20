import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckboxForm from ".";

export default {
  title: "components/molecules/CheckboxForm",
  component: CheckboxForm,
} as ComponentMeta<typeof CheckboxForm>;

const Template: ComponentStory<typeof CheckboxForm> = (args) => {
  return <CheckboxForm {...args} />;
};

export const DefaultCheckboxForm = Template.bind({});
DefaultCheckboxForm.args = {
  text: "자동로그인",
  checked: false,
};
