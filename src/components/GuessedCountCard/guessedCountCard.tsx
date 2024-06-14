import { CardContainer, Count } from "./styles";

interface GuessedCountCardProps {
  count: number;
}

export function GuessedCountCard({ count }: GuessedCountCardProps) {
  const getColorByCount = (count: number): string => {
    if (count <= 25) {
      return "#1E90FF";
    } else if (count <= 50) {
      return "#32CD32";
    } else if (count <= 75) {
      return "#8A2BE2";
    } else if (count <= 100) {
      return "#FFA500";
    } else if (count <= 150) {
      return "#FF1493";
    } else if (count <= 200) {
      return "#FF0000";
    } else if (count < 250) {
      return "#00FA9A";
    } else {
      return "#FF4500";
    }
  };
  const countColor = getColorByCount(count);

  return (
    <CardContainer countColor={countColor}>
      <Count countColor={countColor}>{count}</Count>
    </CardContainer>
  );
}
