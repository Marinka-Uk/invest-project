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

  
  const summaryByMonth = MONTHS.reduce((acc, month) => {
    acc[month] = 0;
    return acc;
  }, {});


  filtered.forEach((item) => {
    const month = new Date(item.date).toLocaleString("uk-UA", {
      month: "long",
    });

    summaryByMonth[month] += item.amount;
  });

  return (
    <Aside>
      <Title>ЗВЕДЕННЯ</Title>

      <List>
        {MONTHS.map((month) => (
          <Item key={month}>
            <Month>{month.toUpperCase()}</Month>
            <Amount>{Math.abs(summaryByMonth[month])} грн</Amount>
          </Item>
        ))}
      </List>
    </Aside>
  );
};
