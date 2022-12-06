import "./ChatList.css";
import { Header, Item, Modal } from "../../../Components/ChatPage/ChatMain";
import { useChatModal, useGetChatList } from "./ChatList.hook";

export const ChatList = () => {
  const chatList = useGetChatList();
  const { open, handleModalToggle } = useChatModal();
  return (
    <div>
      <Header />
      <div id="chatlist_outer_frame">
        <div id="chatlist_title_div">
          <p id="chat_list_text">채팅방 목록</p>
          <button className="chatlist_button" onClick={handleModalToggle}>
            생성
          </button>
        </div>
      </div>

      <ul>
        {chatList.map((chatRoom) => (
          <Item key={chatRoom.id} {...chatRoom} />
        ))}
      </ul>

      {open && <Modal handleModalToggle={handleModalToggle} />}
    </div>
  );
};
