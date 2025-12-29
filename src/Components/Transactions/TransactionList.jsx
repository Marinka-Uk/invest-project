import {TransactionItem} from "./TransactionItem";

export const TransactionList = ({ transactions, activeTab, onDelete }) => {
  const filtered = transactions.filter(
    (item) => item.type === activeTab
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Опис</th>
          <th>Категорія</th>
          <th>Сума</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {filtered.map((item) => (
          <TransactionItem
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};