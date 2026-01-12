import {Row,Cell,Amount,DeleteButton,} from "./TransactionsItem.style";

export const TransactionItem = ({ item, onDelete }) => {
  return (
    <Row>
      <Cell>{item.date}</Cell>
      <Cell>{item.description}</Cell>
      <Cell>{item.category}</Cell>
      <Cell>
        <Amount>{item.amount} грн</Amount>
      </Cell>
      <Cell>
        <DeleteButton
          type="button"
          onClick={() => onDelete(item.id)}
        >
          ✖
        </DeleteButton>
      </Cell>
    </Row>
  );
};
