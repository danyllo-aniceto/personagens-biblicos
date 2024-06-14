import { NotificationWrapper } from "./styles";

interface NotificationProps {
  message: string;
}

export function Notification({ message }: NotificationProps) {
  return <NotificationWrapper>{message}</NotificationWrapper>;
}
