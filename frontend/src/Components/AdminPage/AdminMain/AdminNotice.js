
const AdminNotice = () =>{

    return(
        <div id="notice_frame">
            <span id="notice_category">
                <p>[{} / {}]</p>
            </span>
            <span id="notice_content">
                <p>[공지사항] {}</p>
            </span>
            <span id="notice_date">
                <p>{}</p>
            </span>
        </div>
    );
}

export default AdminNotice;