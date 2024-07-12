import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeWhereInput = {
  id?: StringFilter;
  symbolField?: StringNullableFilter;
  volume?: FloatNullableFilter;
  price?: FloatNullableFilter;
  typeField?: StringNullableFilter;
  openTime?: DateTimeNullableFilter;
  closeTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
