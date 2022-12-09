import "./Modal.css";
import axios from "../../../../Util/axios";
import { useChatTitle } from "./Modal.hook";
import { getUserId } from "../../../../Util/LocalStorage";
import { useNavigate } from "react-router-dom";

export const Modal = ({ handleModalToggle }) => {
  const navigate = useNavigate();
  const { title, handleTitleValue } = useChatTitle();
  const handleCreateChatRoom = () => {
    const userName = getUserId();
    if (!userName) return;
    axios.post("/api/chat", { title, userName }).then((res) => {
      if (res.data.code !== 200) return;
      handleModalToggle();
      const roomId = res.data.roomId;
      navigate(`/chat/${roomId}`);
    });
  };
  return (
    <div className="Chat__Modal__Container">
      <input
        placeholder="제목을 입력하세요."
        type="text"
        value={title}
        onChange={handleTitleValue}
      />
      <button type="button" onClick={handleCreateChatRoom}>
        생성
      </button>
    </div>
  );
};
