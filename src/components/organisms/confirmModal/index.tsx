import { ModalContainer } from "src/components/molecules";
import styled from "styled-components";

interface ConfirmModalProps {
  text: string;
  setIsOpen: (value: boolean) => void;
  onClickYes: () => void;
  onClickNo: () => void;
}
const ConfirmModal = ({
  text,
  setIsOpen,
  onClickNo,
  onClickYes,
}: ConfirmModalProps) => {
  return (
    <ModalContainer
      setIsOpen={setIsOpen}
      isBlack
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Modal>
        {text}
        <div className="button_wrap">
          <button className="button" type="button" onClick={onClickNo}>
            아니요
          </button>
          <button className="button" type="button" onClick={onClickYes}>
            네
          </button>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default ConfirmModal;

const Modal = styled.div`
  width: 300px;
  height: 120px;
  padding: 26px 19px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 16px;
  line-height: 24px;
  color: var(--gray_2);

  .button_wrap {
    margin-top: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    column-gap: 20px;
    button {
      outline: none;
      background-color: var(--white);
      font-size: 14px;
      line-height: 21px;
    }
  }
`;
