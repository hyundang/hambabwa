import { Rating } from "@mui/material";
import { SyntheticEvent } from "react";
import { EmptyStarIcon, StarIcon } from "src/assets";
import styled from "styled-components";

interface StarProps {
  size?: number;
  readOnly?: boolean;
  defaultValue: number | null;
  onChange?: (value: number) => void;
  isGray?: boolean;
  isRed?: boolean;
  precision?: number;
}
const Star = ({
  defaultValue,
  readOnly = false,
  size = 21,
  onChange,
  isGray = false,
  isRed = false,
  precision = 0.5,
}: StarProps) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    value !== null && onChange && onChange(value);
  };
  return (
    <Rating
      name="star"
      readOnly={readOnly}
      defaultValue={defaultValue !== null ? defaultValue : 0}
      value={defaultValue !== null ? defaultValue : 0}
      precision={precision}
      icon={
        isRed ? (
          <RedStarIcon
            className="star"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ) : (
          <StarIcon
            className="star"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        )
      }
      emptyIcon={
        isGray ? (
          <GrayStarIcon
            className="star_empty"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ) : isRed ? (
          <RedEmptyStarIcon
            className="star_empty"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ) : (
          <EmptyStarIcon
            className="star_empty"
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        )
      }
      onChange={handleChange}
    />
  );
};

export default Star;

const RedStarIcon = styled(StarIcon)`
  path {
    fill: var(--red_1);
  }
`;

const RedEmptyStarIcon = styled(EmptyStarIcon)`
  path {
    fill: var(--red_1);
  }
`;

const GrayStarIcon = styled(StarIcon)`
  path {
    fill: var(--gray_7);
  }
`;
