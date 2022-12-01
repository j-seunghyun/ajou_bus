import { Route, Routes } from "react-router-dom";
import { ChatCreate, ChatDetail, ChatList } from "../../Pages/ChatPage";

export const ChatRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatList />} />
      <Route path="/:id" element={<ChatDetail />} />
      <Route path="/create" element={<ChatCreate />} />
    </Routes>
  );
};
