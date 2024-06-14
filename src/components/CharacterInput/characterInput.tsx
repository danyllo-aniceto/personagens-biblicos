import { useState } from "react";
import { Input } from "./styles";

interface CharacterInputProps {
  onAddCharacter: (name: string) => void;
}
export function CharacterInput({ onAddCharacter }: CharacterInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddCharacter(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Digite o nome do personagem"
        onClick={handleSubmit}
      />
    </div>
  );
}
