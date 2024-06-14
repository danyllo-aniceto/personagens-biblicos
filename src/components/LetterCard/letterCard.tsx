import { Card, CardContainer } from "./styles";

interface LetterCardProps {
  charactersRemaining: Map<string, number>;
}

export function LetterCard({ charactersRemaining }: LetterCardProps) {
  const sortedEntries = Array.from(charactersRemaining.entries())
    .filter(([, count]) => count > 0)
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <CardContainer>
      {sortedEntries.map(([letter, count]) => (
        <Card key={letter}>
          <div>{letter}</div>
          <div>{count}</div>
        </Card>
      ))}
    </CardContainer>
  );
}
