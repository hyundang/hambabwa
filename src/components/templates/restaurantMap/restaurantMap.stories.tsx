import { ComponentMeta, ComponentStory } from "@storybook/react";
import { restaurantData } from "src/mocks/data";
import RestaurantMap from ".";

export default {
  title: "components/templates/RestaurantMap",
  component: RestaurantMap,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof RestaurantMap>;

const Template: ComponentStory<typeof RestaurantMap> = (args) => (
  <RestaurantMap {...args} />
);

export const DefaultRestaurantMap = Template.bind({});
DefaultRestaurantMap.args = {
  imageUrl: "https://image.dongascience.com/Photo/2020/03/15856430426741.jpg",
  restaurants: restaurantData.getDefaultRestaurants,
};
