import styled from "styled-components";
import { useSelector } from "react-redux";
import { BarChart,Bar,XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import { selectIncomeChartData } from "../../redux/transactionsSlice";

const Wrapper = styled.div`
  width: 100%;
  height: 320px;
`;


export const ExpenseChart = () => {
  const data = useSelector(selectIncomeChartData);

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={330}>
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