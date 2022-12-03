import "./registerpagestyle.css";

const RegisterMainPage = () =>{

    return(
        <div>
            <h1 id= "register_main_title">아주 교통</h1>
            <div id= "register_main_page_outer_frame">
                <div id= "register_main_body_frame">
                    <div id= "register_id_frame">
                        <input type= "text" id= "register_id_field"/>
                        <button id= "register_check_button">중복 확인</button>
                    </div>
                    <input type= "text" id= "register_email_field"/>
                    <div id= "register_email_authentication_frame">
                        <input type= "text" id= "register_email_authentication_number"/>
                        <button id ="register_email_authentication_button">인증번호 받기</button>
                    </div>
                    <input type= "password" id= "register_password_field"/>
                    <button id= "register_button">회원 가입</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterMainPage;