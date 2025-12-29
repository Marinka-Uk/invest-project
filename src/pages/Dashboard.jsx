import {Header} from "../Components/Header/Header";
import { useState } from "react";

import {Balance} from "../Components/Balance/Balance";
import {Tabs} from "../Components/Tabs/Tabs";
import {TransactionList} from "../Components/Transactions/TransactionList";
import {AddTransaction} from "../Components/AddTransaction/AddTransaction";
import { Summary} from "../Components/Summary/Summary";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2019-09-05",
      description: "Метро",
      category: "Транспорт",
      amount: -30,
      type: "expenses",
    },
    {
        id: 2,
      date: "2019-09-05",
      description: "Банани",
      category: "Продукти",
      amount: -50,
      type: "expenses",
    },
    {
       id: 3,
      date: "2019-09-10",
      description: "ЗП",
      category: "Дохід",
      amount: 20000,
      type: "income",
    },
  ]);
const handleDelete = (id) => {
  setTransactions((prev) =>
    prev.filter((item) => item.id !== id)
  );
};
  return (
    <>
      <Header />

      <Balance />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <AddTransaction />

      <div>
        <TransactionList
          transactions={transactions}
          activeTab={activeTab}
            onDelete={handleDelete}
        />

        <Summary
          transactions={transactions}
          activeTab={activeTab}
        />
      </div>
    </>
  );
};

