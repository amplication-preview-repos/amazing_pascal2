import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";
import { AccessCodeListRelationFilter } from "../accessCode/AccessCodeListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  trades?: TradeListRelationFilter;
  accessCodes?: AccessCodeListRelationFilter;
};
