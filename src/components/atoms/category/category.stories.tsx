import { ComponentMeta, ComponentStory } from "@storybook/react";
import Category from ".";

export default {
  title: "components/atoms/Category",
  component: Category,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args}>전/적/부침류</Category>
);

export const DefaultCategory = Template.bind({});
