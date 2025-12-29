import { useState } from "react";

export const AddTransaction = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  return (
    <section>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Опис товару"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
        </select>

        <input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <button type="button">ВВЕСТИ</button>
        <button type="button">ОЧИСТИТИ</button>
      </div>
    </section>
  );
};


