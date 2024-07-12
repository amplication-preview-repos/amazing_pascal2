import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccessCodeCreateInput = {
  code?: string | null;
  expirationDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
