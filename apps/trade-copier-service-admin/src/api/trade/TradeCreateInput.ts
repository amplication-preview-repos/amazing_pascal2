import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeCreateInput = {
  symbolField?: string | null;
  volume?: number | null;
  price?: number | null;
  typeField?: string | null;
  openTime?: Date | null;
  closeTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
