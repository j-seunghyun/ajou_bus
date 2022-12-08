import { useState } from "react";

export const useSelectCategory = () => {
  const [category, setCategory] = useState("전체");
  const handleSelectCategory = (item) => () => setCategory(item);
  return { category, handleSelectCategory };
};
