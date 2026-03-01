import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  background: #ffffff;
  border-radius: 30px;
  padding: 22px 28px;
  margin-top: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  
  border: 1px solid rgba(15, 23, 42, 0.03);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
`;


export const Fields = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 220px 120px;
  gap: 12px;
  align-items: center;

  
  min-width: 0;
`;


const baseInput = `
  height: 44px;
  border-radius: 30px;
  border: 1px solid rgba(15,23,42,0.06);
  background: rgba(245,247,251,0.95);
  padding: 0 16px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  color: #111827;

  &::placeholder {
    color: #c7cbd6;
  }

  /* subtle focus */
  &:focus {
    box-shadow: 0 6px 20px rgba(59,130,246,0.08);
    border-color: rgba(59,130,246,0.14);
  }
`;

export const Input = styled.input`
  ${baseInput}

  
  padding-right: 44px;
`;


export const Select = styled.select`
  ${baseInput}
  color: #6b7280;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #c7cbd6 50%),
                    linear-gradient(135deg, #c7cbd6 50%, transparent 50%);
  background-position: calc(100% - 14px) calc(1em + 2px), calc(100% - 9px) calc(1em + 2px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
`;


export const DateText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #374151;
  font-weight: 600;
  font-size: 14px;
`;


export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;


export const PrimaryButton = styled.button`
  height: 48px;
  padding: 0 30px;
  border-radius: 28px;
  border: none;
  background: linear-gradient(180deg, #ff7a2a 0%, #ff6a15 100%);
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 26px rgba(255,117,29,0.16);
  transition: transform 120ms ease, box-shadow 120ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 36px rgba(255,117,29,0.18);
  }

  &:active {
    transform: translateY(0);
  }
`;


export const SecondaryButton = styled.button`
  height: 48px;
  padding: 0 28px;
  border-radius: 28px;
  border: 1px solid rgba(14, 20, 28, 0.06);
  background: #ffffff;
  font-weight: 700;
  cursor: pointer;
  color: #374151;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
  transition: background 120ms ease, transform 120ms ease;

  &:hover {
    background: #f8fafc;
  }
`;


export const InputWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  input, select {
    width: 100%;
  }
`;

export const RightIcon = styled.button`
  position: absolute;
  right: 8px;
  height: 28px;
  width: 28px;
  border-radius: 8px;
  border: none;
  background: rgba(15,23,42,0.03);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;