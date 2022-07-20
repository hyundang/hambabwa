import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { useState } from "react";
import SiginIn from ".";

export default {
  title: "components/templates/SiginIn",
  component: SiginIn,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof SiginIn>;

const Template: ComponentStory<typeof SiginIn> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <SiginIn
      {...args}
      checked={checked}
      onClickCheck={() => setChecked((c) => !c)}
    />
  );
};

export const DefaultSignin = Template.bind({});

export const FilledFormWithCheck = Template.bind({});
FilledFormWithCheck.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByPlaceholderText("이메일"),
    "email@example.com",
    {
      delay: 100,
    }
  );
  await userEvent.type(canvas.getByPlaceholderText("비밀번호"), "abcd1234!!", {
    delay: 100,
  });
  userEvent.click(canvas.getByText("자동로그인"));
};
