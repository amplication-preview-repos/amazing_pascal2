import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessCodeUpdateInput = {
  code?: string | null;
  expirationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
