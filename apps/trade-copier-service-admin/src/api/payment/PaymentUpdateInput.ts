import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
