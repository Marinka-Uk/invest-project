import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpenses, addIncomes } from "../../redux/transactionsSlice";
import { nanoid } from 'nanoid';
import { useLocation } from "react-router-dom";

import { Form,Fields,Input,Select,Actions,PrimaryButton,SecondaryButton} from "./AddTransaction.style";
import { Expenses } from "../../pages/Expenses";

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

loc.pathname.includes('Expenses')?dispatch(addExpenses(newTransaction)): dispatch(addIncomes(newTransaction))

    

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
          <option value="transport">Транспорт</option>
          <option value="products">Продукти</option>
          <option value="health">Здоровʼя</option>
          <option value="alcohol">Алкоголь</option>
          <option value="fun">Розваги</option>
          <option value="home">Все для дому</option>
          <option value="tech">Техніка</option>
          <option value="utilities">Комуналка, звʼязок</option>
          <option value="sport">Спорт, хобі</option>
          <option value="study">Навчання</option>
          <option value="other">Інше</option>
        </Select>
{/* {/перевірка + тернарник (38)}x */}
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


//видалення зробити тепер на цю форму