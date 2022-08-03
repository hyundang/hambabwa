import { loadingIcon } from "src/assets";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrap>
      <img className="loading_icon" alt="loading_icon" src={loadingIcon} />
      <p>LOADING</p>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loading_icon {
    width: 150px;
    height: 150px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: var(--red_1);
  }
`;
