import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  userId?: SortOrder;
};
