import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileEditModal from ".";

export default {
  title: "components/organisms/ProfileEditModal",
  component: ProfileEditModal,
  decorators: [
    (story) => <div style={{ width: "390px", height: "884px" }}>{story()}</div>,
  ],
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof ProfileEditModal>;

const Template: ComponentStory<typeof ProfileEditModal> = (args) => (
  <ProfileEditModal {...args} />
);

export const DefaultProfileEditModal = Template.bind({});
DefaultProfileEditModal.args = {
  initNickname: "함바",
  setIsOpen: () => "hi",
};
