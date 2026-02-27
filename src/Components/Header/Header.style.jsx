import styled from "styled-components";


export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 32px;
  background: #f3f4f6;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  min-width: 240px;
`;

export const BackButton = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #111827;
  cursor: pointer;
`;


export const BalanceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BalanceLabel = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const BalanceValue = styled.strong`
  padding: 8px 16px;
  border-radius: 20px;
  background: #f5f7fb;
  font-size: 14px;
  font-weight: 600;
`;


export const ConfirmButton = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #f5f7fb;
  }
`;


export const PeriodBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PeriodButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  cursor: pointer;
`;

export const PeriodText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e5e7eb;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;