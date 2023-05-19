export interface CardProps {
  id: number;
  opened: boolean;
  title: string;
  hour: string;
  date: string;
  content: string;
  status: string;
  click: (id: number) => void;
  deleteCard: () => void;
}
