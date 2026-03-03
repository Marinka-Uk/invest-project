import styled from "styled-components";


export const TabsSection = styled.section`
  display: inline-flex;
  background: #ffffff;
  border-radius: 30px;
  padding: 6px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  margin-left: 200px ;
  margin-bottom: 20px ;
`;


export const TabButton = styled.button`
min-width: 120px;
  height: 44px;
  padding: 8px 18px;
  border-radius: 22px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 160ms cubic-bezier(.2,.9,.2,1);


  background: ${({ active }) =>
    active ? "#ff751d" : "transparent"};
  color: ${({ active }) => (active ? "#ffffff" : "#111827")};

  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) =>
      active ? "#ff751d" : "#f5f7fb"};
  }
`;
