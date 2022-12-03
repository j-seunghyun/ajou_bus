import "./semesterpagestyle.css";

export const SemesterMainPage = () =>{
    return(
        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="head_menu_button">
                        <img alt="menu_button" src="assets/img/menubuttonimage.png"/>
                    </button>
                    <h1>학기 노선</h1>
                    <button id= "head_login_button">
                        <img alt= "login_button" src="assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id= "semester_body_frame">
                <div id = "semester_gwangyo_frame">
                    <p id= "semester_gwangyo_text">광교 중앙 노선</p>
                    <img src= "assets/img/gwangyo_table.png" alt="gwangyo_table.png"/>
                </div>
                <div id= "semester_etc_frmae">
                    <p id = "semester_etc_text">기타 노선</p>
                    <img src = "assets/img/etc_table frame.png" alt="etc_table.png"/>
                </div>
            </div>
        </div>
    );
};