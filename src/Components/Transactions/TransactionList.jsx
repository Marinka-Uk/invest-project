import { TransactionItem } from "./TransactionItem";
import {Table,Head,Th,Body,} from "./TransactionsList.style";

export const TransactionList = ({
  transactions,
  activeTab,
  onDelete,
}) => {
  const filtered = transactions.filter(
    (item) => item.type === activeTab
  );

  return (
    <Table>
      <Head>
        <tr>
          <Th>Дата</Th>
          <Th>Опис</Th>
          <Th>Категорія</Th>
          <Th>Сума</Th>
          <Th></Th>
        </tr>
      </Head>

      <Body>
        {filtered.map((item) => (
          <TransactionItem
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        ))}
      </Body>
    </Table>
  );
};
