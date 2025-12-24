import { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  return (
    <section>
      <div>
        <button type="button" onClick={() => setActiveTab("expenses")}>
          ВИТРАТИ
        </button>

        <button type="button" onClick={() => setActiveTab("income")}>
          ДОХОДИ
        </button>
      </div>

      <div>
        {activeTab === "expenses" && <p>Список витрат</p>}
        {activeTab === "income" && <p>Список доходів</p>}
      </div>
    </section>
  );
};
