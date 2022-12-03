import "./vacationpagestyle.css";

export const VacationMainPage = () =>{

    return(
        <div>
            <div id= "head_outer_div">
                <div id= "main_head_frame">
                    <button id="head_menu_button">
                        <img alt="menu_button" src="assets/img/menubuttonimage.png"/>
                    </button>
                    <h1>방학 노선</h1>
                    <button id= "head_login_button">
                        <img alt= "login_button" src="assets/img/user.png"/>
                    </button>
                </div>
            </div>
            <div id= "vacation_body_frame">
                <div id = "vacation_suwon_frame">
                    <p id= "vacation_suwon_text">수원역</p>
                    <img src= "assets/img/suwon_Frame.png" alt="suwon_table.png"/>
                </div>
                <div id= "vacation_gwangyo_frame">
                    <p id = "vacation_gwangyo_text">광교중앙(아주대)역</p>
                    <img src = "assets/img/vacation_gwangyo_Frame.png" alt="vacation_gwangyo.png"/>
                </div>
            </div>
        </div>
    );
};