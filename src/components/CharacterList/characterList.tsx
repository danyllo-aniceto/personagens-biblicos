import { List, ListItem } from "./styles";

interface CharacterListProps {
  characters: string[];
}
export function CharacterList({ characters }: CharacterListProps) {
  return (
    <List>
      {characters.map((character, index) => (
        <ListItem key={index}>{character}</ListItem>
      ))}
    </List>
  );
}
