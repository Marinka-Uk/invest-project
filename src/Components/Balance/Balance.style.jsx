
import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 0;
  box-sizing: border-box;
  background: transparent;
`;

export const Label = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-right: 12px;
  font-weight: 600;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;


export const Value = styled.div`
  background: #ffffff;
  border-radius: 22px;
  padding: 10px 18px;
  box-shadow: 0 6px 18px rgba(10,20,40,0.04);
  font-weight: 700;
  color: #111827;
  border: 1px solid rgba(15, 23, 42, 0.06);
`;


export const ConfirmButton = styled.button`
  background: transparent;
  border-radius: 18px;
  padding: 10px 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  cursor: pointer;
  font-weight: 600;
  color: #475569;
`;
