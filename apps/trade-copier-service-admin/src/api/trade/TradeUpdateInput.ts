import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeUpdateInput = {
  symbolField?: string | null;
  volume?: number | null;
  price?: number | null;
  typeField?: string | null;
  openTime?: Date | null;
  closeTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
