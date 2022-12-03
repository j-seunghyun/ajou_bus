import "./chatdetailpage.css";

const ChatDetailPage = () =>{

    return(
        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="head_menu_button">
                        <img alt="menu_button" src ="../assets/img/menubuttonimage.png"/>
                    </button>
                    <h1>아주 chat</h1>
                    <button id= "head_login_button">
                        <img alt= "login_button" src="../assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id="chat_detail_outer_div">
                <div id= "chat_detail_title_div">
                    <p id="chat_detail_title">수원역까지 같이 탑승하실 분 구합니다 [3/4]</p>
                </div>
                <div id="chat_detail_room_div">
                    <div id= "chat_detail_room_box">
                        <div id="chat_detail_chat_div">
                            <div id="chat_detail_chat_user">
                                <p id= "chat_user_name">익명1</p>
                            </div>
                            <div id ="chat_detail_chat_message_div">
                                <p id="chat_message_content">message contents goes here</p>
                            </div>
                        </div>
                        <div id= "chat_detail_current_chat_div">
                            <input type="text" id="chat_detail_current_chat"></input>
                            <button id="chat_send_button" >
                                <img src="../assets/img/sendbuttonimg.png"alt="chat_send_image"/>
                            </button>
                        </div>
                    </div>
                </div>
                <button id= "chat_detail_button">나가기</button>
            </div>
        </div>
    );
}
export default ChatDetailPage;