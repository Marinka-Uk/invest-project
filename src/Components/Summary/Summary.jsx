export const Summary = ({ transactions, activeTab }) => {
  const filtered = transactions.filter(
    (item) => item.type === activeTab
  );

  const summaryByMonth = filtered.reduce((acc, item) => {
    const month = new Date(item.date).toLocaleString("uk-UA", {
      month: "long",
    });

    acc[month] = (acc[month] || 0) + item.amount;
    return acc;
  }, {});

  return (
    <aside>
      <h3>ЗВЕДЕННЯ</h3>

      <ul>
        {Object.entries(summaryByMonth).map(
          ([month, total]) => (
            <li key={month}>
              <span>{month.toUpperCase()}</span>
              <span>{Math.abs(total)} грн</span>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};


