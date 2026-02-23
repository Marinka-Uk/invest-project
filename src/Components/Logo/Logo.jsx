import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <Badge />
      <Title>InvestIQ</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Badge = styled.div`
  width: 36px;
  height: 22px;
  background: linear-gradient(180deg, #ff7a1a 0%, #ff6a00 100%);
  border-radius: 12px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  color: #111;
  letter-spacing: 0.5px;
`;
