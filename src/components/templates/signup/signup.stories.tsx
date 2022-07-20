import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import SiginUp from ".";

export default {
  title: "components/templates/SiginUp",
  component: SiginUp,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof SiginUp>;

const Template: ComponentStory<typeof SiginUp> = (args) => (
  <SiginUp {...args} />
);

export const DefaultSignin = Template.bind({});

export const FilledFormAndSubmit = Template.bind({});
FilledFormAndSubmit.play = async ({ canvasElement }) => {
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
  await userEvent.type(
    canvas.getByPlaceholderText("비밀번호 확인"),
    "abcd1234!!",
    {
      delay: 100,
    }
  );
  await userEvent.type(canvas.getByPlaceholderText("닉네임"), "현댕", {
    delay: 100,
  });
  userEvent.click(canvas.getByText("회원가입"));
};
