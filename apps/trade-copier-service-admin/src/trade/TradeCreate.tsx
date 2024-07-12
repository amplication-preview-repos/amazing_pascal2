import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="symbol" source="symbolField" />
        <NumberInput label="volume" source="volume" />
        <NumberInput label="price" source="price" />
        <TextInput label="type" source="typeField" />
        <DateTimeInput label="openTime" source="openTime" />
        <DateTimeInput label="closeTime" source="closeTime" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
