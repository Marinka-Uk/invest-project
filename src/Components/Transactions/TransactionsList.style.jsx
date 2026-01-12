import styled from "styled-components";


export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  border-radius: 30px;
  border-collapse: collapse;
  overflow: hidden;
`;


export const Head = styled.thead`
  background: #ffffff;
`;


export const Th = styled.th`
  padding: 14px 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #9ca3af;
`;


export const Body = styled.tbody``;


export const Row = styled.tr`
  &:hover {
    background: #f9fafb;
  }
`;


export const Td = styled.td`
  padding: 14px 20px;
  font-size: 14px;
  color: #111827;
  border-top: 1px solid #f1f5f9;
`;
