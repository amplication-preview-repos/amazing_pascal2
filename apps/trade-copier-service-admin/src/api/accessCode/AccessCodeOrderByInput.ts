import { SortOrder } from "../../util/SortOrder";

export type AccessCodeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  code?: SortOrder;
  expirationDate?: SortOrder;
  userId?: SortOrder;
};
