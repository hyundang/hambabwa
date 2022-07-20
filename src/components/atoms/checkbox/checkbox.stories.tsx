import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import CheckBox from ".";

export default {
  title: "components/atoms/CheckBox",
  component: CheckBox,
  decorators: [
    (story) => <div style={{ width: "26px", height: "26px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click CheckBox"],
    },
  },
} as ComponentMeta<typeof CheckBox>;

const StyledCheckBox = styled(CheckBox)``;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <StyledCheckBox {...args}>로그인</StyledCheckBox>
);

export const DefaultCheckBox = Template.bind({});
DefaultCheckBox.args = {
  checked: false,
};
