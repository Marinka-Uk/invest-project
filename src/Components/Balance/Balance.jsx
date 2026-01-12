import  {Section,Label,Right, Value,ConfirmButton,} from "./Balance.style";

export const Balance = () => {
  return (
    <Section>
      <Label>Баланс:</Label>

      <Right>
        <Value>00.00 UAH</Value>
        <ConfirmButton type="button">
          ПІДТВЕРДИТИ
        </ConfirmButton>
      </Right>
    </Section>
  );
};

