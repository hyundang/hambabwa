import { ComponentMeta, ComponentStory } from "@storybook/react";
import ToastMsg from ".";

export default {
  title: "components/molecules/ToastMsg",
  component: ToastMsg,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof ToastMsg>;

const Template: ComponentStory<typeof ToastMsg> = (args) => (
  <ToastMsg {...args} />
);

export const DefaultToastMsg = Template.bind({});
DefaultToastMsg.args = {
  isActive: true,
  text: "😀 클립보드에 복사되었어요! ",
};
export const ErrorToastMsg = Template.bind({});
ErrorToastMsg.args = {
  isActive: true,
  isError: true,
  text: "😢 로그인에 실패했어요! ",
};
