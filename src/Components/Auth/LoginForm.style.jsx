import styled from "styled-components";


export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  background: #f5f7fb;
`;


export const Section = styled.section`
  margin-left: auto;
  width: 460px;
  display: flex;
  align-items: center;
  padding: 0 40px;
`;


export const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
`;


export const Text = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;
`;


export const GoogleButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 30px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 24px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  &:hover {
    background: #f8f9fd;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;


export const Label = styled.label`
  font-size: 12px;
  color: #111827;
  margin-bottom: 6px;
`;


export const Input = styled.input`
  height: 46px;
  border-radius: 30px;
  border: none;
  background: #f5f7fb;
  padding: 0 18px;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;


export const PrimaryButton = styled.button`
  flex: 1;
  height: 46px;
  border-radius: 30px;
  border: none;
  background: #ff751d;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;


export const SecondaryButton = styled.button`
  flex: 1;
  height: 46px;
  border-radius: 30px;
  border: none;
  background: #f5f7fb;
  font-weight: 500;
  cursor: pointer;
`;
