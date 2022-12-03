

const ChatDetailPage = () =>{

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
            <div id="chat_detail_outer_div">
                <div id= "chat_detail_title_div">
                    <p>수원역까지 같이 탑승하실 분 구합니다 [3/4]</p>
                </div>
                <div id= "chat_detail_room_div">
                    <div id="chat_detail_chat_div">
                        <img id="chat_detail_chat_user"/>
                        <div id ="chat_detail_chat_message_div">
                            <p id="chat_detail_chat_message">Message content goes here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatDetailPage;