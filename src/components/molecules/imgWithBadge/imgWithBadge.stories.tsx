import { ComponentMeta, ComponentStory } from "@storybook/react";
import { editIcon } from "src/assets";
import { Icon } from "src/components/atoms";
import styled from "styled-components";
import ImgWithBadge from ".";

export default {
  title: "components/molecules/ImgWithBadge",
  component: ImgWithBadge,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
} as ComponentMeta<typeof ImgWithBadge>;

const Template: ComponentStory<typeof ImgWithBadge> = (args) => (
  <ImgWithBadge {...args} />
);

const Me = styled.p`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 1px solid var(--white);
  background-color: var(--red_1);
  font-size: 10px;
  color: var(--white);
  text-align: center;
  line-height: 16px;
`;
export const MyProfileImg = Template.bind({});
MyProfileImg.args = {
  imageUrl: "https://image.dongascience.com/Photo/2020/03/15856430426741.jpg",
  size: 36,
  badgeContent: <Me>나</Me>,
};

const EditIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: var(--red_2);
`;
export const MyProfileImgEdit = Template.bind({});
MyProfileImgEdit.args = {
  imageUrl: "https://image.dongascience.com/Photo/2020/03/15856430426741.jpg",
  size: 57,
  badgeContent: (
    <EditIcon>
      <img src={editIcon} style={{ width: 16, height: 16 }} />
    </EditIcon>
  ),
};
