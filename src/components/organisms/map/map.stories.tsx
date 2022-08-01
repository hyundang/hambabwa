import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { restaurantData } from "src/mocks/data";
import Map from ".";

export default {
  title: "components/organisms/Map",
  component: Map,
  decorators: [
    (story) => <div style={{ width: "100%", height: "100%" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;

export const DefaultMap = Template.bind({});
DefaultMap.args = {
  restaurants: restaurantData.getDefaultRestaurants,
};
