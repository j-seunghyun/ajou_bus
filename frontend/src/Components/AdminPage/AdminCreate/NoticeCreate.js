import "./noticecreate.css";

const NoticeCreate = () =>{
    return(
        <div>
            <h1 id= "notice_head">아주 교통 관리자 페이지</h1>
            <h1 id="notice">공지사항 등록</h1>
            <div id="notice_categories_frame">
                <p id= "notice_category">공지사항 분류 설정</p>
                <div id="notice_category_dropdown">
                    <p>전체</p>
                    <button id="notice_category_dropdown_button">∨</button>
                </div>
                <p id= "notice_route">공지사항 노선 설정</p>
                <div id= "notice_route_dropdown">
                    <p>전체</p>
                    <button id="notice_route_dropdown_button">∨</button>
                </div>
            </div>
            <div id= "notice_inputfields_frame">
                <p id= "notice_name">공지사항 이름</p>
                <input type="text" id="notice_name_field"/>
                <p id= "notice_content">공지사항 내용</p>
                <input type="text" id="notice_content_field"/>
            </div>

            <div id= "notice_register_button_div">
                <button id= "notice_register_button">등록하기</button>
            </div>
        </div>
    );
}

export default NoticeCreate;