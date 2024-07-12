import { User } from "../user/User";

export type AccessCode = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  code: string | null;
  expirationDate: Date | null;
  user?: User | null;
};
