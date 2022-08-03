import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loading from ".";

export default {
  title: "components/templates/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const DefaultLoading = Template.bind({});
