import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  color: #0f1724;
  cursor: pointer;
  padding: 4px 8px;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 12px 14px;
  box-shadow: 0 10px 30px rgba(10,20,40,0.04);
  box-sizing: border-box;
`;


export const Sum = styled.div`
  color: #ff7a18;
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 6px;
`;


export const Name = styled.div`
  color: #475569;
  font-size: 12px;
`;


export const Empty = styled.div`
  color: #6b7280;
  text-align: center;
  padding: 16px 0;
`;
