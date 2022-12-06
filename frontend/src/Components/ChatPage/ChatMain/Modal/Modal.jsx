import "./Modal.css";

export const Modal = ({ handleModalToggle }) => {
  const handleCreateChatRoom = () => {
    //api call
    // success
    // handleModalToggle
  };
  return (
    <div className="Chat__Modal__Container">
      <input placeholder="제목을 입력하세요." type="text" />
      <input placeholder="최대 인원을 입력하세요" type="number" />
      <button type="button" onClick={handleCreateChatRoom}>
        생성
      </button>
    </div>
  );
};
