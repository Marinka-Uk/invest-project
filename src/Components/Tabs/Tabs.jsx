import { TabsSection, TabButton } from "./Tabs.style";

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <TabsSection>
      <TabButton
        active={activeTab === "expenses"}
        onClick={() => setActiveTab("expenses")}
      >
        ВИТРАТИ
      </TabButton>

      <TabButton
        active={activeTab === "income"}
        onClick={() => setActiveTab("income")}
      >
        ДОХІД
      </TabButton>
    </TabsSection>
  );
};
