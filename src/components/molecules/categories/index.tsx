import { HTMLAttributes, MouseEvent, useCallback } from "react";
import { Category } from "src/components/atoms";
import { categoryTypes } from "src/types";
import styled from "styled-components";

interface CategoriesProps extends HTMLAttributes<HTMLDivElement> {
  categoryList: categoryTypes.getCategoryResProps[];
  selected: string[];
  onClickCategory: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Categories = ({
  id,
  className,
  style,
  onClickCategory,
  categoryList,
  selected,
}: CategoriesProps) => {
  const isSelected = useCallback(
    (code: string) => {
      return selected.includes(code);
    },
    [selected]
  );

  return (
    <CategoriesWrap id={id} className={className} style={style}>
      {categoryList.map((cg) => (
        <Category
          id={cg.code}
          key={cg.code}
          isActive={isSelected(cg.code)}
          onClick={onClickCategory}
        >
          {cg.title}
        </Category>
      ))}
    </CategoriesWrap>
  );
};

export default Categories;

const CategoriesWrap = styled.div`
  outline: none;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 7px;
`;
