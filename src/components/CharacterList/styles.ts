import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 400px; /* Altura máxima da lista */
  overflow-y: auto; /* Adicionar scroll vertical */
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const ListItem = styled.li`
  padding: 10px;
  width: 500px;
  font-size: 16px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-family: "Pacifico", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  font-size: 1em;
  color: #213f77;
  background-color: white;
`;
