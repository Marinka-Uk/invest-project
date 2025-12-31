import styled from "styled-components";

export const CategoryItem = ({ title, amount, icon }) => {
  return (
    <Item >
      <Icon >{icon}</Icon>
      <Amount >{amount} грн</Amount>
      <Title>{title}</Title>
    </Item>
  );
};


const Item = styled.div`
  background: #f8f9fd;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #fff1e6;
    transform: translateY(-2px);
  }
`;

const Icon = styled.div`
  font-size: 28px;
  margin-bottom: 8px;
`;

const Amount = styled.span`
  display: block;
  font-weight: 600;
  color: #ff751d;
  margin-bottom: 4px;
`;

const Title = styled.span`
  font-size: 14px;
  color: #333;
`;

