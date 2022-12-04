export const Category = () => {
  return (
    <>
      <div id="notice_category_nav_frame">
        <div id="notice_category_nav_rect">
          <p>전체</p>
          <button id="notice_nav_button">∨</button>
        </div>
      </div>
      <div id="notice_button_scroll_frame">
        <button className="locate_button">전체</button>
        <button className="locate_button">목동</button>
        <button className="locate_button">잠실</button>
        <button className="locate_button">사당</button>
        <button className="locate_button">분당</button>
        <button className="locate_button">금정</button>
        <button className="locate_button">안산</button>
        <button className="locate_button">수원역</button>
      </div>
    </>
  );
};
