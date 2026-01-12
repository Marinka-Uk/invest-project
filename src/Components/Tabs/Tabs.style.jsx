import styled from "styled-components";


export const TabsSection = styled.section`
  display: inline-flex;
  background: #ffffff;
  border-radius: 30px;
  padding: 6px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
`;


export const TabButton = styled.button`
  min-width: 120px;
  height: 40px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.5px;

  background: ${({ active }) =>
    active ? "#ff751d" : "transparent"};
  color: ${({ active }) => (active ? "#ffffff" : "#111827")};

  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) =>
      active ? "#ff751d" : "#f5f7fb"};
  }
`;
