import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactionsSlice";
import { TransactionItem } from "./TransactionItem";
import {Table, Head, Th, Body} from "./TransactionsList.style";

export const TransactionList = () => {

  const dispatch = useDispatch();

  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  const activeTab = useSelector(
    (state) => state.ui.activeTab
  );

  const filtered = transactions.filter(
    (item) => item.type === activeTab
  );

  return (
    <>
  
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
            onDelete={(id) =>
              dispatch(deleteTransaction(id))
            }
          />
        ))}
      </Body>
    </Table>
    </>
  );
};
