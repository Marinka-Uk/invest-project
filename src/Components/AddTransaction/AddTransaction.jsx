import { useState } from "react";
import { Form,Fields,Input,Select, Actions, PrimaryButton,SecondaryButton} from "./AddTransaction.style";


export const AddTransaction = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");



  //під ччас сабміту форми діспатч екшен addTransaction і передавати йому всі поля форми
  return (
    <Form>
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
        <SecondaryButton type="button">ОЧИСТИТИ</SecondaryButton>
      </Actions>
    </Form>
  );
};
