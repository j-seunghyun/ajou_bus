import { getUserId } from "../../../../Util/LocalStorage";
import { useChatMessageInput } from "./MessageInput.hook";

export const MessageInput = ({ handleSendMessage: sendMessage }) => {
  const userId = getUserId();
  const { message, handleChangeMessage, handleInitMessage } =
    useChatMessageInput();
  const handleSendMessage = () => {
    sendMessage(userId, message)();
    handleInitMessage();
  };
  return (
    <div id="chat_detail_current_chat_div">
      <input
        type="text"
        id="chat_detail_current_chat"
        value={message}
        onChange={handleChangeMessage}
      />
      <button id="chat_send_button" onClick={handleSendMessage}>
        <img src="../assets/img/sendbuttonimg.png" alt="chat_send_image" />
      </button>
    </div>
  );
};
