import "./chatlist.css";
const ChatMain = () =>{

    return(
        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="menu_button">
                        <img alt="menu_button" src="assets/img/menubuttonimage.png"/>
                    </button>
                    <h1>아주 chat</h1>
                    <button>
                        <img alt= "login_button" src="assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id="chatlist_outer_frame">
                <div id="chatlist_title_div">
                    <p id= "chat_list_text">채팅방 목록</p>
                    <button className ="chatlist_button">생성</button>
                </div>

                <div id="chatlist">
                    <p id= "chat_title">수원역까지 같이 탑승하실분 구합니다 [{}/{}]</p>
                    <button className ="chatlist_button">입장</button>
                </div>
            </div>

            <div id= "chat_button_frame">
                <div id="chat_page_button">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>></button>
                </div>
            </div>
        </div>
    );
}

export default ChatMain;