import "./adminlogin.css"

const LoginForm = () =>{
    return(
        <div>
            <p id="login_page_intro">아주 교통 관리자 페이지</p>

            <div id="login_outer_frame">
                <p id= "login_text">Login to your Account</p>
                <div id="login_inner_frame">
                    <label id="login_email_label">Email</label>
                    <input type="text" id="login_email_textfield"/>

                    <label id="login_password_label">Password</label>
                    <input type="text" id="login_password_textfield"/>

                    <div id="login_checkbox_div">
                        <input type="checkbox"/>
                        <label id="login_checkbox_label">Remember Me</label>
                    </div>

                    <button id="login_button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;