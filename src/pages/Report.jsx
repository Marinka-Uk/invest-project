import{ ExpenseChart} from "../Components/Expense/ExpenseChart";
import { ReportCategories } from "../Components/ReportCategories/ReportCategories";



export const Report = () => {
  return (
    <div>
      <h1>Звіт</h1>
       <ReportCategories />
       <ExpenseChart />
    </div>
  );
};


