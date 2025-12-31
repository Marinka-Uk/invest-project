import styled from "styled-components";

import { CategoryItem } from "./CategoryItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
`;
 const categories = [
  { title: "Продукти", amount: 5000, icon: "" },
  { title: "Алкоголь", amount: 200, icon: "" },
  { title: "Розваги", amount: 800, icon: "" },
  { title: "Здоровʼя", amount: 900, icon: "" },
  { title: "Транспорт", amount: 2000, icon: "" },
  { title: "Все для дому", amount: 1500, icon: "" },
];

export const CategoryList = () => {
  return (
    <Grid >
      {categories.map((cat, index) => (
        <CategoryItem key={index} {...cat} />
      ))}
    </Grid>
  );
};
