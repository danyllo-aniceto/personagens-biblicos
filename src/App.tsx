import { useEffect, useState } from "react";
import { GuessedCountCard } from "./components/GuessedCountCard/guessedCountCard";
import { Container, Header, Title } from "./style";
import { CharacterInput } from "./components/CharacterInput/characterInput";
import { Notification } from "./components/Notification/notification";

import charactersData from "./characters.json";
import { LetterCard } from "./components/LetterCard/letterCard";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function App() {
  const [charactersGuessed, setCharactersGuessed] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);
  const [characters, setCharacters] = useState<string[]>([]);
  const [allCharacters, setAllCharacters] = useState<string[]>([]);
  const [charactersRemaining, setCharactersRemaining] = useState<
    Map<string, number>
  >(new Map());

  const updateRemainingCharacters = (name: string) => {
    const firstLetter = name.charAt(0);
    setCharactersRemaining((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(firstLetter, (newMap.get(firstLetter) || 0) - 1);
      return newMap;
    });
  };

  const handleAddCharacter = (name: string) => {
    const lowerCaseName = name.toLowerCase();
    if (!allCharacters.includes(lowerCaseName)) {
      setNotification(`O personagem "${name}" não foi identificado.`);
    } else if (
      characters.map((char) => char.toLowerCase()).includes(lowerCaseName)
    ) {
      setNotification(`O personagem "${name}" já está na lista.`);
    } else {
      const capitalizedName = capitalize(name);
      setCharacters((prevCharacters) =>
        [...prevCharacters, capitalizedName].sort((a, b) => a.localeCompare(b))
      );
      setNotification(null);
      updateRemainingCharacters(capitalizedName);
      setCharactersGuessed((prevCount) => prevCount + 1);
    }
  };

  const countRemainingCharacters = (characters: string[]) => {
    const characterCountMap = new Map<string, number>();
    characters.forEach((character) => {
      const firstLetter = character.charAt(0).toUpperCase();
      characterCountMap.set(
        firstLetter,
        (characterCountMap.get(firstLetter) || 0) + 1
      );
    });
    setCharactersRemaining(characterCountMap);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    const charactersLowerCase = charactersData.map((char: string) =>
      char.toLowerCase()
    );
    setAllCharacters(charactersLowerCase);
    countRemainingCharacters(charactersLowerCase);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Personagens da Bíblia</Title>
        <GuessedCountCard count={charactersGuessed} />
      </Header>
      <CharacterInput onAddCharacter={handleAddCharacter} />
      {notification && <Notification message={notification} />}
      <LetterCard charactersRemaining={charactersRemaining} />
    </Container>
  );
}

export default App;
