import styled from "styled-components";

export const Aside = styled.aside`
  width: 420px; 
  background: #fff;
  border-radius: 14px;
  padding: 18px;
  margin-left: 1000px;
  box-shadow: 0 10px 24px rgba(22, 31, 50, 0.06);
  box-sizing: border-box;
`;

export const Title = styled.h3`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(246,247,251,1), #fff);
`;

export const Month = styled.span`
  font-size: 13px;
  color: #26313a;
  font-weight: 600;
`;

export const Amount = styled.span`
  font-size: 13px;
  color: #39404a;
  font-weight: 700;
`;
