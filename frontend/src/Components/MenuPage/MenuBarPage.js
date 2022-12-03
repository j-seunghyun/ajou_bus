import "./menupagestyle.css";

const MenuBarPage = () =>{

    return(
        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="head_menu_button">
                        <img alt="menu_button" src="assets/img/closebutton.png"/>
                    </button>
                    <h1>아주교통</h1>
                    <button id= "head_login_button">
                        <img alt= "login_button" src="assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id= "menu_page_body_frame">
                <div id ="menu_page_button_inner_frame">
                    <div id= "menu_home_login_frame">
                        <div id= "menu_home_frame">
                            <button id= "menu_home_button">
                                <img src="../assets/img/homebutton.png" alt= "menu_home_button"/>
                            </button>
                            <p id= "menu_home_text">홈</p>
                        </div>
                        <div id= "menu_login_frame">
                            <button id= "menu_login_button">
                                <img src= "../assets/img/loginbutton.png" alt= "menu_login_button"/>
                            </button>
                            <p id= "menu_login_text">로그인</p>
                        </div>
                    </div>
                    <div id= "menu_notice_semester_frame">
                        <div id= "menu_notice_frame">
                            <button id= "menu_notice_button">
                                <img src= "../assets/img/noticebutton.png" alt= "menu_notice_button"/>
                            </button>
                            <p id= "menu_notice_text">공지사항</p>
                        </div>
                        <div id= "menu_semester_frame">
                            <button id= "menu_semester_button">
                                <img src = "../assets/img/infobutton.png" alt= "menu_semester_button"/>
                            </button>
                            <p id= "menu_semester_text">학기 노선 정보</p>
                        </div>
                    </div>
                    <div id= "menu_vacation_chat_frame">
                        <div id= "menu_vacation_frame">
                            <button id= "menu_vacation_button">
                                <img src = "../assets/img/infobutton.png" alt= "menu_vacation_button"/>
                            </button>
                            <p id= "menu_vacation_text">방학 노선 정보</p>
                        </div>
                        <div id= "menu_chat_frame">
                            <button id= "menu_chat_button">
                                <img src = "../assets/img/chatbutton.png" alt= "menu_chat_button"/>
                            </button>
                            <p id= "menu_chat_text">아주 교통 채팅방</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBarPage;