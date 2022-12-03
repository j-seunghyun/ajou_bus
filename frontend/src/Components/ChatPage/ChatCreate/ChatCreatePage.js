import "./chatcreatepage.css";

const ChatCreatePage = () => {

    return(
        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="menu_button">
                        <img alt="menu_button" src ="../assets/img/menubuttonimage.png"/>
                    </button>
                    <h1>아주 chat</h1>
                    <button>
                        <img alt= "login_button" src="../assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id= "chat_create_outer_div">
                <div id="chat_create_name_div">
                    <p id="chat_create_name_set">채팅방 이름 설정</p>
                    <input type="text" id="chat_create_name"/>
                </div>
                <div id= "chat_create_number_div">
                    <p id="chat_create_number_set">채팅방 인원 수 선택</p>
                    <div>
                        <input type="radio"/>2명
                        <input type="radio"/>3명
                        <input type="radio"/>4명
                    </div>
                </div>
                <div id= "chat_create_password_div">
                    <p id="chat_create_password_set">채팅방 비밀번호 설정(선택 사항)</p>
                    <input type="text" id= "chat_create_password"/>
                </div>
                <div id="chat_create_button_div">
                    <button id="chat_create_button">생성</button>
                </div>
            </div>
        </div>
    );
}

export default ChatCreatePage;