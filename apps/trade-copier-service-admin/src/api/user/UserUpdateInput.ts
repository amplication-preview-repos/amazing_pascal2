import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { TradeUpdateManyWithoutUsersInput } from "./TradeUpdateManyWithoutUsersInput";
import { AccessCodeUpdateManyWithoutUsersInput } from "./AccessCodeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  payments?: PaymentUpdateManyWithoutUsersInput;
  trades?: TradeUpdateManyWithoutUsersInput;
  accessCodes?: AccessCodeUpdateManyWithoutUsersInput;
};
