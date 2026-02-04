import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpenses, addIncomes } from "../../redux/transactionsSlice";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";

import {
  Form,
  Fields,
  Input,
  Select,
  Actions,
  PrimaryButton,
  SecondaryButton,
} from "./AddTransaction.style";


const categorysExpenses = [
  { ua: "Продукти", eu: "products" },
  {
    ua: "Транспорт",
    eu: "transport",
  },
  { ua: "Здоровʼя", eu: "health" },

  { ua: "Продукти", eu: "products" },
  {
    ua: "Розваги",
    eu: "fun",
  },
  { ua: "Все для дому", eu: "home" },
  { ua: "Техніка", eu: "tech" },

  { ua: "Комуналка, звʼязок", eu: "utilities" },
  {
    ua: "Спорт, хобі",
    eu: "sport",
  },
  { ua: "Навчання", eu: "study" },

  { ua: "Інше", eu: "other" },
];

const categorysIncomes = [
  { ua: "Додатковий дохід", eu: "ed incomes" },

  { ua: "Зарплата", eu: "selary" },
];

export const AddTransaction = () => {
  const dispatch = useDispatch();
  const loc = useLocation();
  console.log(loc);
  const activeTab = useSelector((state) => state.ui.activeTab);

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !description || !amount) {
      alert("Заповни всі поля");
      return;
    }

    const newTransaction = {
      id: nanoid(),
      type: activeTab,
      date,
      description,
      category,
      amount: Number(amount),
    };

   

    loc.pathname.includes("Expenses")
      ? dispatch(addExpenses(newTransaction))
      : dispatch(addIncomes(newTransaction));

    setCategory("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fields>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Опис товару"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Категорія товару</option>
          {loc.pathname.includes("Expenses")
            ? categorysExpenses.map((category) => {
                return <option value={category.eu}>{category.ua}</option>;
              })
            : categorysIncomes.map((category) => {
                return <option value={category.eu}>{category.ua}</option>;
              })}
        </Select>

       
        <Input
          type="number"
          placeholder={loc.pathname.includes("Expenses") ? "-0.00" : "+0.00"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Fields>

      <Actions>
        <PrimaryButton type="submit">ВВЕСТИ</PrimaryButton>

        <SecondaryButton
          type="button"
          onClick={() => {
            setCategory("");
            setDescription("");
            setAmount("");
            setDate("");
          }}
        >
          ОЧИСТИТИ
        </SecondaryButton>
      </Actions>
    </Form>
  );
};


