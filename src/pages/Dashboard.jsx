import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Balance } from "../Components/Balance/Balance";
import { Tabs } from "../Components/Tabs/Tabs";
import { TransactionList } from "../Components/Transactions/TransactionList";
import { AddTransaction } from "../Components/AddTransaction/AddTransaction";
import { Summary } from "../Components/Summary/Summary";
// import { CategoryList } from "../Components/Categories/CategoryList";
// import { ExpenseChart } from "../Components/Expense/ExpenseChart";



export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("expenses");
const navigate = useNavigate();

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
    <div>



    </div>
   
<Card>
  <Balance />
  <Graf type="button" onClick={() => navigate("/report")}>
  ПЕРЕЙТИ ДО ГРАФІКУ
</Graf>

  <AddTransaction />
</Card>
<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <Outlet />

      <Page>
        <TransactionList
        
          transactions={transactions}
          activeTab={activeTab}
          onDelete={handleDelete}
        />
        <Content>
          <Summary transactions={transactions} activeTab={activeTab} />
          


         
        </Content>
      </Page>
    </>
  );
};

const Page = styled.div`
  background: #f3f6fb; 
  min-height: 100vh;
  padding: 36px 24px;
  box-sizing: border-box;
`;

const Content = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;


const Graf = styled.button`

 color: #ff7a18;
  font-weight: 800;
  font-size: 14px;
   margin-bottom: 24px;
   margin-left:  850px;
   border-radius: 100px;
     box-sizing: border-box;
     border: #ffffff;
     background: #ffffff;
`;
const Card = styled.section`
  background: #ffffff;
  border-radius: 26px;
  padding: 28px;
  margin-bottom: 24px;
  box-shadow: 0 18px 60px rgba(10,20,40,0.06);
  box-sizing: border-box;
`;

