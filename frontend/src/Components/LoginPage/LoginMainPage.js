import "./loginmainpagestyle.css";

const LoginMainPage = () => {

    return(
        <div>
            <h1 id= "login_main_page_title">아주 교통</h1>
            <div id= "login_main_body_frame">
                <div id= "login_with_google_frame">
                    <h1 id= "login_page_welcome_text">Login to your Account</h1>
                    <div id= "login_google_frame">
                        <button id= "login_with_google_button">
                            <img src="../assets/img/logingooglebutton.png" alt= "goggle_button"/>
                        </button>
                    </div>
                </div>
                <p id= "login_sub_message">------------- or Sign in with Email -------------</p>
                <div id= "login_components_frame">
                    <div>
                        <p id= "login_main_email_text">Email</p>
                        <input type= "text" id= "login_main_email_textfield"/>
                    </div>
                    <div>
                        <p id= "login_main_password_text">Password</p>
                        <input type= "password" id= "login_main_password_textfield"/>
                    </div>
                    <button id= "login_main_button">Login</button>
                    <button id= "sign_in_button">Sign-in</button>
                </div>
            </div>
        </div>
    );
}

export default LoginMainPage;