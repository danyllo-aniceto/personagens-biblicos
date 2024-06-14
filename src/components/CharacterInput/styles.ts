import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 500px;
  margin-right: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  color: #213f77;
  background: WHITE;
  border: none;
  border-radius: 5px;
  font-family: "Pacifico", cursive;
  &::placeholder {
    color: #213f77;
    font-family: "Pacifico", cursive; /* Fonte do placeholder */
    font-size: 14px; /* Tamanho da fonte do placeholder */
  }

  &:focus {
    outline: 2px solid #213f77;
  }
`;
