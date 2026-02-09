import { useSelector } from "react-redux";
import { Section, Label, Right, Value, ConfirmButton } from "./Balance.style";
import { selectBalance } from "../../redux/transactionsSlice";

export const Balance = () => {
  const balance = useSelector(selectBalance);

  return (
    <Section>
      <Label>Баланс:</Label>

      <Right>
        <Value>{balance.toFixed(2)} UAH</Value>

        <ConfirmButton type="button">
          ПІДТВЕРДИТИ
        </ConfirmButton>
      </Right>
    </Section>
  );
};
