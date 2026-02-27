import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <Shadow />
        <Shape />
      </div>
      <Text>INVESTIQ</Text>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Shape = styled.div`
  width: 22px;
  height: 32px;
  background: #ff7a2f;
  border-radius: 16px;
  position: relative;
`;

const Shadow = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  background: #f4d6c5;
  border-radius: 16px;
  left: -10px;
  top: -10px;
  z-index: -1;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 2px;
  color: black;
`;
