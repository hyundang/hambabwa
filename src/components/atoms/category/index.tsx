import { ButtonHTMLAttributes } from "react";
import { circleImg } from "src/assets";
import styled, { css } from "styled-components";

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 활성화 여부 */
  isActive: boolean;
}

const Category = ({
  id,
  className,
  style,
  children,
  onClick,
  isActive,
}: CategoryProps) => {
  return (
    <CategoryWrap
      id={id}
      className={className}
      style={style}
      type="button"
      role="button"
      isActive={isActive}
      onClick={onClick}
    >
      {children}
    </CategoryWrap>
  );
};

export default Category;

const CategoryWrap = styled.button<CategoryProps>`
  outline: none;
  width: 104px;
  height: 104px;
  border-radius: 52px;
  margin: 0;
  font-size: 18px;
  color: var(--white);
  transition: 0.2s;
  ${({ isActive }) =>
    isActive
      ? css`
          background: url(${circleImg}) center center / cover, var(--red_2);
        `
      : css`
          background-color: var(--red_2);
        `}
`;
