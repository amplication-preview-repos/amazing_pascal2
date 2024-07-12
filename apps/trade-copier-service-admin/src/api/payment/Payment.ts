import { User } from "../user/User";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status?: "Option1" | null;
  transactionDate: Date | null;
  user?: User | null;
};
