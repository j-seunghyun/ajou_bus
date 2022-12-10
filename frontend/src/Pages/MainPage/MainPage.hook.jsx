import { useState } from "react";

export const useSelectCategory = () => {
  const [category, setCategory] = useState("전체");
  const handleSelectCategory = (item) => (e) =>
    setCategory(item ? item : e.target.value);
  return { category, handleSelectCategory };
};
