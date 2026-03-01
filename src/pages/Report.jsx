import{ ExpenseChart} from "../Components/Expense/ExpenseChart";
import { ReportCategories } from "../Components/ReportCategories/ReportCategories";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



export const Report = () => {
  const navigate = useNavigate();

  return (
    <div>
  
      <Nazad type="button" onClick={() => navigate("/dashboard")}>
  ←
</Nazad>

       <ReportCategories />
       <ExpenseChart />
    </div>
  );
};



export const Nazad = styled.button`
  margin-top: 50px;
  min-width: 120px;
  height: 44px;
  padding: 8px 18px;
  border-radius: 22px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 160ms cubic-bezier(.2,.9,.2,1);


  background: ${({ active }) =>
    active ? "#ff751d" : "transparent"};
  color: ${({ active }) => (active ? "#ffffff" : "#111827")};

  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) =>
      active ? "#ff751d" : "#f5f7fb"};
  }
`
