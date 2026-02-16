import{ ExpenseChart} from "../Components/Expense/ExpenseChart";
import { ReportCategories } from "../Components/ReportCategories/ReportCategories";
import { useNavigate } from "react-router-dom";



export const Report = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Звіт</h1>
      <button type="button" onClick={() => navigate("/dashboard")}>
  ←
</button>

       <ReportCategories />
       <ExpenseChart />
    </div>
  );
};


