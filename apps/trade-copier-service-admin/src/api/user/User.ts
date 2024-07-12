import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";
import { Trade } from "../trade/Trade";
import { AccessCode } from "../accessCode/AccessCode";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  payments?: Array<Payment>;
  trades?: Array<Trade>;
  accessCodes?: Array<AccessCode>;
};
