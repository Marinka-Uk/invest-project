import styled from "styled-components";


export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border-radius: 30px;
  padding: 20px 32px;
  margin: 24px 0;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
`;


export const Label = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;


export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;


export const Value = styled.strong`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
`;


export const ConfirmButton = styled.button`
  height: 36px;
  padding: 0 18px;
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
