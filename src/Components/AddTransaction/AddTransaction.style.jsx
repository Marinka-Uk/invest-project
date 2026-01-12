import styled from "styled-components";


export const Section = styled.section`
  background: #ffffff;
  border-radius: 30px;
  padding: 24px;
  margin-top: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;


export const Fields = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 220px 120px;
  gap: 12px;
  align-items: center;
`;


export const Input = styled.input`
  height: 44px;
  border-radius: 30px;
  border: none;
  background: #f5f7fb;
  padding: 0 16px;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  height: 44px;
  border-radius: 30px;
  border: none;
  background: #f5f7fb;
  padding: 0 16px;
  font-size: 14px;
  outline: none;
  color: #6b7280;
`;


export const Actions = styled.div`
  display: flex;
  gap: 12px;
`;


export const PrimaryButton = styled.button`
  height: 44px;
  padding: 0 28px;
  border-radius: 30px;
  border: none;
  background: #ff751d;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  height: 44px;
  padding: 0 28px;
  border-radius: 30px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;
