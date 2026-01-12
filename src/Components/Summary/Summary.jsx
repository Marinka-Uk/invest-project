import { Aside, Title, List, Item, Month, Amount } from "./Summary.style";

export const Summary = ({ transactions, activeTab }) => {
  const filtered = transactions.filter((item) => item.type === activeTab);

  const summaryByMonth = filtered.reduce((acc, item) => {
    const month = new Date(item.date).toLocaleString("uk-UA", {
      month: "long",
    });

    acc[month] = (acc[month] || 0) + item.amount;
    return acc;
  }, {});

  return (
    <Aside>
      <Title>ЗВЕДЕННЯ</Title>

      <List>
        {Object.entries(summaryByMonth).map(([month, total]) => (
          <Item key={month}>
            <Month>{month.toUpperCase()}</Month>
            <Amount>{Math.abs(total)} грн</Amount>
          </Item>
        ))}
      </List>
    </Aside>
  );
};
