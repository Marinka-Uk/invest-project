import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { useState } from "react";

import { Balance } from "../Components/Balance/Balance";
import { Tabs } from "../Components/Tabs/Tabs";
import { TransactionList } from "../Components/Transactions/TransactionList";
import { AddTransaction } from "../Components/AddTransaction/AddTransaction";
import { Summary } from "../Components/Summary/Summary";
import { CategoryList } from "../Components/Categories/CategoryList";
import { ExpenseChart } from "../Components/Expense/ExpenseChart";



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
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
   
<Card>
  <Balance />
  <AddTransaction />
</Card>
          <Outlet />

      <Page>
        <TransactionList
          transactions={transactions}
          activeTab={activeTab}
          onDelete={handleDelete}
        />
        <Content>
          <Summary transactions={transactions} activeTab={activeTab} />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
<Card>
   <CategoryList />
</Card>
<Card><ExpenseChart/></Card>
         
        </Content>
      </Page>
    </>
  );
};

const Page = styled.div`
  background: #f5f7fb;
  min-height: 100vh;
`;

const Content = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
`;

const Card = styled.section`
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 24px;
`;
