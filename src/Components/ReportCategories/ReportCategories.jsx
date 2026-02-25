import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../redux/uiSlice";
import {
  Section,
  Header,
  ArrowButton,
  Title,
  Grid,
  Card,
  Sum,
  Name,
  Empty,
} from "./ReportCategories.style";

export const ReportCategories = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.ui.activeTab);


  const transactionsState = useSelector((state) => state.transactions);

console.log(transactionsState);
  const expenses = transactionsState?.transactions?.expenses || [];
  const incomes = transactionsState?.transactions?.incomes || [];
console.log(expenses);
console.log(incomes);
  const list = activeTab === "expenses" ? expenses : incomes;

console.log(list);
  const totalsByCategory = list.reduce((acc, item) => {
    const key = item.category || "other";
    acc[key] = (acc[key] || 0) + (Number(item.amount) || 0);
    return acc;
  }, {});

  const entries = Object.entries(totalsByCategory);
console.log(totalsByCategory);
console.log(entries);
  return (
    <Section>
      <Header>
        <ArrowButton type="button" onClick={() => dispatch(setActiveTab("expenses"))}>
          ‹
        </ArrowButton>

        <Title>{activeTab === "expenses" ? "ВИТРАТИ" : "ДОХІД"}</Title>

        <ArrowButton type="button" onClick={() => dispatch(setActiveTab("income"))}>
          ›
        </ArrowButton>
      </Header>

      {entries.length === 0 ? (
        <Empty>Немає даних</Empty>
      ) : (
        <Grid>
          {entries.map(([category, total]) => (
            <Card key={category}>
              <Sum>{Math.abs(total)} грн</Sum>
              <Name>{category}</Name>
            </Card>
          ))}
        </Grid>
      )}
    </Section>
  );
};
