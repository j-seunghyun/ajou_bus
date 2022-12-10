export const CATEGORY_LIST = [
  {
    id: 1,
    title: "전체",
  },
  {
    id: 2,
    title: "목동",
  },
  {
    id: 3,
    title: "잠실",
  },
  {
    id: 4,
    title: "사당",
  },
  {
    id: 5,
    title: "분당",
  },
  {
    id: 6,
    title: "금정",
  },
  {
    id: 7,
    title: "안산",
  },
  {
    id: 8,
    title: "수원역",
  },
];
export const Category = ({ handleSelectCategory }) => {
  return (
    <>
      <div id="notice_button_scroll_frame">
        {CATEGORY_LIST.map((category) => (
          <button
            className="locate_button"
            key={category.id}
            onClick={handleSelectCategory(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </>
  );
};
