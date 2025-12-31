export const TransactionItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
      <td>{item.amount} грн</td>
      <td>
        <button onClick={() => onDelete(item.id)}>✖</button>
      </td>
    </tr>
  );
};
