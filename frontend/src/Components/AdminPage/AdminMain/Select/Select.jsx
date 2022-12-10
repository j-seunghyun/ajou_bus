import { CATEGORY_LIST } from "../../../MainPage/Category/Category";
import "./Select.css";

export const AdminSelect = ({ handleSelectCategory }) => {
  return (
    <select id="Admin__Select" onChange={handleSelectCategory()}>
      {CATEGORY_LIST.map((category) => (
        <option key={category.id} value={category.title} id={category.id}>
          {category.title}
        </option>
      ))}
    </select>
  );
};
