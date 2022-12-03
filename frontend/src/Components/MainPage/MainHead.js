import "./mainpage.css";

const MainHead = () => {
    return(

        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="head_menu_button">
                        <img alt="menu_button" src="assets/img/menubuttonimage.png"/>
                    </button>
                    <h1>공지사항</h1>
                    <button id= "head_login_button">
                        <img alt= "login_button" src="assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id= "notice_category_nav_frame">
                <div id= "notice_category_nav_rect">
                    <p>전체</p>
                    <button id ="notice_nav_button">∨</button>
                </div>
            </div>
            <div id= "notice_button_scroll_frame">
                <div id="notice_button_scroll">
                    <button className ="locate_button">전체</button>
                    <button className ="locate_button">목동</button>
                    <button className ="locate_button">잠실</button>
                    <button className ="locate_button">사당</button>
                    <button className ="locate_button">분당</button>
                    <button className ="locate_button">금정</button>
                    <button className ="locate_button">안산</button>
                    <button className ="locate_button">수원역</button>
                </div>
            </div>
            <div id="main_notice_frames">
                <div id= "main_notice_frame">
                    <button id= "main_notice">
                        <div id= "main_notice_first">
                            <p id= "main_notice_text">[공지사항]</p>
                            <p id= "main_notice_context">목동 노선 변경</p>
                        </div>
                        <div id="main_notice_second">
                            <p id= "main_notice_category">[전체/목동]</p>
                            <p id= "main_notice_time">2022.11.17 01:37:00</p>
                        </div>
                    </button>
                </div>
            </div>
            <div id= "main_button_frame">
                <div id="main_page_button">
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

export default MainHead;