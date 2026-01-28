import styled from "styled-components";


export const Row = styled.tr`
  transition: background 0.2s ease;

  &:hover {
    background: #f9fafb;
  }
`;


export const Cell = styled.td`
  padding: 14px 20px;
  font-size: 14px;
  color: #111827;
  border-top: 1px solid #f1f5f9;

  &:last-child {
    text-align: right;
      width: 50px;

  }
`;


export const Amount = styled.span`
  font-weight: 600;
`;


export const DeleteButton = styled.button`
  width: 75px;
  height: 28px;
  border-radius: 20%;
  border: none;
  background: red;
  color: #9ca3af;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #fee2e2;
    color: #dc2626;
  }
`;
