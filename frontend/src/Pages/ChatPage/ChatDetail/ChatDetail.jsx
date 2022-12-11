import {
  Header,
  MessageInput,
  Message,
} from "../../../Components/ChatPage/ChatDetail/.";
import "./ChatDetail.css";
import { useChatMessage, useJoinChat } from "./ChatDetail.hook";

export const ChatDetail = () => {
  const { messageList, handleAddMessage, handleSendMessage } = useChatMessage();
  const handleExitChat = useJoinChat({ handleAddMessage });
  return (
    <div>
      <Header />
      <div id="chat_detail_outer_div">
        <div id="chat_detail_title_div">
          <p id="chat_detail_title">
            수원역까지 같이 탑승하실 분 구합니다 [3/4]
          </p>
        </div>
        <div id="chat_detail_room_div">
          <div id="chat_detail_room_box">
            {messageList.map((message, i) => (
              <Message id={i} name={message.userName} message={message.msg} />
            ))}
          </div>
          <MessageInput handleSendMessage={handleSendMessage} />
        </div>
        <button id="chat_detail_button" onClick={handleExitChat}>
          나가기
        </button>
      </div>
    </div>
  );
};
