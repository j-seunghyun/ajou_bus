import "./adminnotice.css";
import Notice from "./Notice";

const AdminNoticeMain = () =>{

    return(
        <div>
            <h1 id="notice_head">아주 교통 관리자 페이지</h1>
            <p id="notice">공지사항</p>
            <div id="notice_menu_button_div">
                <div id= "menu_div">
                    <p id= "dropdown_text">전체</p>
                    <button id= "dropdown_button">∨</button>
                </div>
                <div id="button_div">
                    <button id= "select">선택</button>
                    <button id= "modify">수정</button>
                    <button id= "create">생성</button>
                    <button id= "delete">삭제</button>
                </div>
            </div>
            <div id= "notices_div">
                <div id="notices_frame">
                    <Notice/>
                </div>
            </div>
            <div id="button_div">
                <button className= "button_style">1</button>
                <button className= "button_style">2</button>
                <button className= "button_style">3</button>
                <button className= "button_style">4</button>
                <button className ="button_style">5</button>
                <button className= "button_style">></button>
            </div>
        </div>
    );
}

export default AdminNoticeMain;