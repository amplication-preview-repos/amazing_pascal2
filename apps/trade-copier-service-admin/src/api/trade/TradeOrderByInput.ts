import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  symbolField?: SortOrder;
  volume?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  openTime?: SortOrder;
  closeTime?: SortOrder;
  userId?: SortOrder;
};
