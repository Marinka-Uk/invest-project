import styled from "styled-components";


export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 32px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
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
