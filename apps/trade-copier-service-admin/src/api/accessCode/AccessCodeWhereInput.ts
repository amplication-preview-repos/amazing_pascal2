import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessCodeWhereInput = {
  id?: StringFilter;
  code?: StringNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
