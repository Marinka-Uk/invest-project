import styled from "styled-components";


export const Aside = styled.aside`
  background: #ffffff;
  border-radius: 30px;
  padding: 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
`;


export const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
`;


export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0;
  font-size: 14px;

  color: #374151;

  &:not(:last-child) {
    border-bottom: 1px solid #f1f5f9;
  }
`;


export const Month = styled.span`
  font-weight: 500;
`;


export const Amount = styled.span`
  font-weight: 600;
  color: #111827;
`;
