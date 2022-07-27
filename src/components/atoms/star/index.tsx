import { Rating } from "@mui/material";
import { SyntheticEvent } from "react";
import { emptyStarIcon, starIcon } from "src/assets";

interface StarProps {
  size?: number;
  readOnly?: boolean;
  defaultValue: number | null;
  onChange?: (value: number) => void;
}
const Star = ({
  defaultValue,
  readOnly = false,
  size = 21,
  onChange,
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
      precision={0.5}
      icon={
        <img
          src={starIcon}
          alt="star"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      }
      emptyIcon={
        <img
          src={emptyStarIcon}
          alt="star_empty"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      }
      onChange={handleChange}
    />
  );
};

export default Star;
