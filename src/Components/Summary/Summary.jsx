import { Aside, Title, List, Item, Month, Amount } from "./Summary.style";

const MONTHS = [
  "січень",
  "лютий",
  "березень",
  "квітень",
  "травень",
  "червень",
  "липень",
  "серпень",
  "вересень",
  "жовтень",
  "листопад",
  "грудень",
];

export const Summary = ({ transactions, activeTab }) => {
  const filtered = transactions.filter((item) => item.type === activeTab);

  
  const summaryByMonth = new Array(12).fill(0);

  filtered.forEach((item) => {
    const d = new Date(item.date);
    const idx = d.getMonth(); 
    summaryByMonth[idx] += Number(item.amount) || 0;
  });

  return (
    <Aside>
      <Title>ЗВЕДЕННЯ</Title>

      <List>
        {MONTHS.map((month, idx) => (
          <Item key={month}>
            <Month>{month.toUpperCase()}</Month>
            <Amount>{Math.abs(summaryByMonth[idx])} грн</Amount>
          </Item>
        ))}
      </List>
    </Aside>
  );
};