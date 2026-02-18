import styled from "styled-components";

export const Section = styled.section`
  padding: 24px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const ArrowButton = styled.button`

  background: transparent;

  border: none;
  font-size: 28px;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  background: #f6f7fb;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
`;

export const Sum = styled.p`
  margin: 0 0 6px;
  font-weight: 700;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
`;

export const Empty = styled.p`
  text-align: center;
  margin: 0;
  opacity: 0.7;
`;
