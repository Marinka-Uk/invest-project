import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../redux/transactionsSlice";


import { Form,Fields,Input,Select,Actions,PrimaryButton,SecondaryButton} from "./AddTransaction.style";

export const AddTransaction = () => {
  const dispatch = useDispatch();

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
      id: uuidv4(),
      type: activeTab,
      date,
      description,
      category,
      amount: Number(amount),
    };

    dispatch(addTransaction(newTransaction));

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