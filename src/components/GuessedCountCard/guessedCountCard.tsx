import { CardContainer, Count } from "./styles";

interface GuessedCountCardProps {
  count: number;
}

export function GuessedCountCard({ count }: GuessedCountCardProps) {
  const getColorByCount = (count: number): string => {
    if (count <= 5) {
      return "#1E90FF";
    } else if (count <= 10) {
      return "#32CD32";
    } else {
      return "#8A2BE2";
    }
  };
  const countColor = getColorByCount(count);

  return (
    <CardContainer countColor={countColor}>
      <Count countColor={countColor}>{count}</Count>
    </CardContainer>
  );
}
