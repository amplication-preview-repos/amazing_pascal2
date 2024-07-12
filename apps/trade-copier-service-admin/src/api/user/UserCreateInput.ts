import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { TradeCreateNestedManyWithoutUsersInput } from "./TradeCreateNestedManyWithoutUsersInput";
import { AccessCodeCreateNestedManyWithoutUsersInput } from "./AccessCodeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  trades?: TradeCreateNestedManyWithoutUsersInput;
  accessCodes?: AccessCodeCreateNestedManyWithoutUsersInput;
};
