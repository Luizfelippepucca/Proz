import { CardList } from "@/app/page";

export interface DrawerProps {
  list: CardList[];
  close: () => void;
  read: (id: number) => void;
}
