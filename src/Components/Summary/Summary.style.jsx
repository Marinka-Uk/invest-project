
import styled from "styled-components";

export const Aside = styled.aside`
  width: 420px;
  background: #ffffff;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(10,20,40,0.04);
  box-sizing: border-box;
  margin-left: 660px;

  
  max-height: 1120px; 
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #0f1724;
  letter-spacing: 0.6px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  
  padding-right: 6px;

  -webkit-overflow-scrolling: touch;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(255,255,255,1) 100%);
  margin-bottom: 8px;
  box-shadow: inset 0 1px 0 rgba(15,23,42,0.02);
  transition: transform 120ms ease, box-shadow 120ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(10,20,40,0.06);
  }
`;

export const Month = styled.span`
  font-size: 13px;
  color: #0f1724;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Amount = styled.span`
  font-size: 13px;
  color: #0f1724;
  opacity: 0.85;
  font-weight: 600;
  white-space: nowrap;
`;