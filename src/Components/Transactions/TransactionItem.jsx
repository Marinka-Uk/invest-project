export const TransactionItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td>21.11.2019</td>
      <td>Метро</td>
      <td>Транспорт</td>
      <td>-30.00 грн</td>
       <td>
        <button type="button"  onClick={() => onDelete(item.id)}>🗑</button>
      </td>
    </tr>
  );
};