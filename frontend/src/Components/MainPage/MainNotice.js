import "./mainpage.css";
import "./noticepage.css";

const MainNotice = () =>{
    return(
        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="menu_button">
                        <img alt="menu_button" src="assets/img/menubuttonimage.png"/>
                    </button>
                    <h1>공지사항</h1>
                    <button>
                        <img alt= "login_button" src="assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id= "notice_title_frame">
                <div id= "notice_title_inner_frame">
                    <p>11.18(금) 등교 및 학교 버스 도착 및 <br/>출발 장소 변경 안내</p>
                </div>
            </div>
            <div id= "notice_title_sub_frame">
                <div id="notice_title_sub_inner_frame">
                    <p id= "notice_title_sub">총괄팀  |  장승현  |  작성일 2022-11-17  |</p>
                </div>
            </div>
            <div id= "notice_content_frame">
                <div id= "notice_content_inner_frame">
                    <p id= "main_notice_content">
                        금일 악천후로 인해 버스 운영이 중단됨을 알립니다.
                    </p>
                </div>
            </div>
            <div id="notice_list_button_frame">
                <button id="notice_list_button">목록</button>
            </div>
        </div>
    );
}

export default MainNotice;