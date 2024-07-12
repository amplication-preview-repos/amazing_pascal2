import { User } from "../user/User";

export type Trade = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  symbolField: string | null;
  volume: number | null;
  price: number | null;
  typeField: string | null;
  openTime: Date | null;
  closeTime: Date | null;
  user?: User | null;
};
