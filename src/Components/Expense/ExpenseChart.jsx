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
  
];

