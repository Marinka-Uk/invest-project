
import {
  HeaderWrapper,
  LogoWrapper,
  BalanceBlock,
  BalanceLabel,
  PeriodBlock,
  UserBlock,
  Avatar,
  LeftSide

} from "../Header/Header.style";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";   
import { Logo } from "../Logo/Logo";

export const Layout = ({ children }) => {
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";


  const user = useSelector((state) => state.auth.user);
  const userName = user?.login || "User Name";

  return (
    <>
     
        <HeaderWrapper>
          <LeftSide>
         <LogoWrapper onClick={() => window.location.assign("/")}>
  <Logo />
</LogoWrapper>
</LeftSide>

          <BalanceBlock>
            <BalanceLabel />
          </BalanceBlock>

{isDashboard && (
          <PeriodBlock style={{ background: "transparent", boxShadow: "none" }}>
            <UserBlock>
              <Avatar>{userName[0]}</Avatar>
              <div style={{ fontWeight: 600, color: "#514537" }}>
                {userName}   
              </div>
            </UserBlock>
          </PeriodBlock>
          )}
        </HeaderWrapper>
      

      {children}
    </>
  );
};

export default Layout;
