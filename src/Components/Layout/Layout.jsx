
import {HeaderWrapper,BackButton,BalanceBlock,BalanceLabel,PeriodBlock,PeriodButton,PeriodText
} from "../Header/Header.style";


export const Layout = ()=>{

return (
 <HeaderWrapper>
      <BackButton>← лого</BackButton>

      <BalanceBlock>
        <BalanceLabel>Hello, user</BalanceLabel>
        {/* <BalanceValue></BalanceValue>
        <ConfirmButton>ПІДТВЕРДИТИ</ConfirmButton> */}
      </BalanceBlock>

      <PeriodBlock>
        <PeriodButton>‹</PeriodButton>
        <PeriodText>logOut</PeriodText>
        <PeriodButton>›</PeriodButton>
      </PeriodBlock>
    </HeaderWrapper>
)



}