import { Star } from "src/components/atoms";
import styled from "styled-components";

interface ScoreProps {
  score: number;
  displayTotalCount?: boolean;
  totalCount?: number;
}
const Score = ({
  score,
  displayTotalCount = false,
  totalCount = 0,
}: ScoreProps) => {
  return (
    <TitleWrap>
      <div className="score_wrap">
        <p>{score}점</p>
        <Star defaultValue={score} readOnly size={22} />
      </div>
      {displayTotalCount && <p className="total_count">전체 {totalCount}</p>}
    </TitleWrap>
  );
};

export default Score;

const TitleWrap = styled.div`
  width: 100%;
  margin-bottom: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .score_wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    p {
      height: 31px;
      font-weight: 500;
      font-size: 20px;
      line-height: 35px;
      margin-right: 10px;
    }
  }
  .total_count {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--gray_2);
  }
`;
