import { Link } from "react-router-dom";

export const Item = ({ title, id }) => {
  return (
    <li id="Chat__List__Container">
      <p id="chat_title">{title}</p>
      <Link to={`/chat/${id}`} className="chatlist_button">
        입장
      </Link>
    </li>
  );
};
