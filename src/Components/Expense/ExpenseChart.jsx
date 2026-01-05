import styled from "styled-components";
import { BarChart,Bar,XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

const Wrapper = styled.div`
  width: 100%;
  height: 320px;
`;


export const ExpenseChart = () => {
  return (
    <Wrapper>
      <ResponsiveContainer width="990" height="330">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#FF751D"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};


const data = [
  { name: "Свинина", value: 5000 },
  { name: "Говядина", value: 4500 },
  { name: "Курятина", value: 3200 },
  { name: "Риба", value: 2100 },
  { name: "Палички", value: 1800 },
  { name: "Кава", value: 1700 },
  { name: "Спагетті", value: 1500 },
  { name: "Шоколад", value: 800 },
  { name: "Маслини", value: 500 },
  { name: "Зелень", value: 300 },
];

