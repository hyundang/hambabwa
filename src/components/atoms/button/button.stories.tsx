import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import Button from ".";

export default {
  title: "components/atoms/Button",
  component: Button,
  decorators: [
    (story) => <div style={{ width: "325px", height: "50px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Button>;

const StyledButton = styled(Button)`
  font-size: 18px;
  border-radius: 5px;
`;

const Template: ComponentStory<typeof Button> = (args) => (
  <StyledButton {...args}>로그인</StyledButton>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  isActive: false,
};
