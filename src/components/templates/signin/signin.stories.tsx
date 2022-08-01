import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
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

const Template: ComponentStory<typeof SiginIn> = (args) => (
  <SiginIn {...args} />
);

export const DefaultSignin = Template.bind({});

export const FilledFormWrongEmail = Template.bind({});
FilledFormWrongEmail.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByPlaceholderText("이메일"), "email.com", {
    delay: 100,
  });
  await userEvent.type(canvas.getByPlaceholderText("비밀번호"), "abcd1234!!", {
    delay: 100,
  });
  userEvent.click(canvas.getByText("로그인"));
  expect(canvas.getByText("잘못된 이메일 형식입니다.")).toBeInTheDocument();
};

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
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
  userEvent.click(canvas.getByText("로그인"));
};
