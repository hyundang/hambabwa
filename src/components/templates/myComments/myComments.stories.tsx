import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userData } from "src/mocks/data";
import MyComments from ".";

export default {
  title: "components/templates/MyComments",
  component: MyComments,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof MyComments>;

const Template: ComponentStory<typeof MyComments> = (args) => (
  <MyComments {...args} />
);

export const DefaultMyComments = Template.bind({});
DefaultMyComments.args = {
  comments: userData.getMyComments,
  onClickDelete: () => "hi",
};
