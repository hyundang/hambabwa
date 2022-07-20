import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import SiginInform from ".";
// import "@testing-library/jest-dom";

export default {
  title: "components/oranisms/SiginInform",
  component: SiginInform,
} as ComponentMeta<typeof SiginInform>;

const Template: ComponentStory<typeof SiginInform> = (args) => (
  <SiginInform {...args} />
);

export const DefaultForm = Template.bind({});

export const FilledFormWrong = Template.bind({});
FilledFormWrong.play = async ({ canvasElement }) => {
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
