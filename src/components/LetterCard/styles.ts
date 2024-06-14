import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espaçamento entre os cards */
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  padding: 10px;
  margin: 0;
  border-radius: 4px;
  width: 30px; /* Largura inicial dos cards */
  text-align: center;
  background-color: #213f77;
  color: WHITE;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-family: "Pacifico", cursive;
  font-size: 1em;
`;
