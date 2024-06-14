import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #213f77;
  padding: 10px;
  border-radius: 10px;

  font-family: "Pacifico", cursive;
  text-align: center;
`;
