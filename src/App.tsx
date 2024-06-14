import { useState } from "react";
import { GuessedCountCard } from "./components/GuessedCountCard/guessedCountCard";
import { Container, Header, Title } from "./style";

function App() {
  const [charactersGuessed, setCharactersGuessed] = useState<number>(0);
  return (
    <Container>
      <Header>
        <Title>Personagens da Bíblia</Title>
        <GuessedCountCard count={charactersGuessed} />
      </Header>
    </Container>
  );
}

export default App;
