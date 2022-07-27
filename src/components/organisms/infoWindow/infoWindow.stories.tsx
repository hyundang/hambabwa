import { ComponentMeta, ComponentStory } from "@storybook/react";
import { restaurantData } from "src/mocks/data";
import InfoWindow from ".";

export default {
  title: "components/organisms/InfoWindow",
  component: InfoWindow,
  decorators: [
    (story) => <div style={{ width: "295px", height: "196px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof InfoWindow>;

const Template: ComponentStory<typeof InfoWindow> = (args) => <InfoWindow {...args} />;

export const DefaultInfoWindow = Template.bind({});
DefaultInfoWindow.args = {
    restaurantInfo: restaurantData.getRestaurant[0]
};
