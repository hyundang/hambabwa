import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputImg from ".";

export default {
  title: "components/molecules/InputImg",
  component: InputImg,
  decorators: [
    (story) => <div style={{ width: "70px", height: "70px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof InputImg>;

const Template: ComponentStory<typeof InputImg> = (args) => (
  <InputImg {...args} />
);

export const DefaultInputImg = Template.bind({});
DefaultInputImg.args = {
  placeholder: "닉네임을 입력해주세요.",
};
