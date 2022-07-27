import { ComponentMeta, ComponentStory } from "@storybook/react";
import { restaurantData } from "src/mocks/data";
import RestaurantDetail from ".";

export default {
  title: "components/templates/RestaurantDetail",
  component: RestaurantDetail,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof RestaurantDetail>;

const Template: ComponentStory<typeof RestaurantDetail> = (args) => (
  <RestaurantDetail {...args} />
);

export const DefaultRestaurantDetail = Template.bind({});
DefaultRestaurantDetail.args = {
  restaurantInfo: restaurantData.getRestaurants[0],
  nickname: "함바",
};
