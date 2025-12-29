export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <section>
      <button onClick={() => setActiveTab("expenses")}>
        ВИТРАТИ
      </button>

      <button onClick={() => setActiveTab("income")}>
        ДОХІД
      </button>
    </section>
  );
};




