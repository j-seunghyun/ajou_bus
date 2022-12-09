export const Message = ({ name, message }) => {
  return (
    <div id="chat_detail_chat_div">
      <div id="chat_detail_chat_user">
        <p id="chat_user_name">{name}</p>
      </div>
      <div id="chat_detail_chat_message_div">
        <p id="chat_message_content">{message}</p>
      </div>
    </div>
  );
};
