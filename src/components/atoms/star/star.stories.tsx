import { ComponentMeta, ComponentStory } from "@storybook/react";
import Star from ".";

export default {
  title: "components/atoms/Star",
  component: Star,
  decorators: [
    (story) => <div style={{ width: "295px", height: "196px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const DefaultStar = Template.bind({});
DefaultStar.args = {
  defaultValue: 3,
};

export const ReadOnlyStar = Template.bind({});
ReadOnlyStar.args = {
  defaultValue: 3,
  readOnly: true,
};

export const EmptyStar = Template.bind({});
EmptyStar.args = {
  defaultValue: 0,
};

export const GrayStar = Template.bind({});
GrayStar.args = {
  defaultValue: 0,
  isGray: true,
};

export const RedStar = Template.bind({});
RedStar.args = {
  defaultValue: 0,
  isRed: true,
};

export const CustomSizeStar = Template.bind({});
CustomSizeStar.args = {
  defaultValue: 3,
  size: 50,
};
