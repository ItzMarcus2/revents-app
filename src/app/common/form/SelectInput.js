import React from "react";
import { Form, Label, Select, FormField } from "semantic-ui-react";

const SelectInput = ({
  input,
  type,
  placeholder,
  multiple,
  options,
  meta: { touched, error }
}) => {
  return (
    <FormField>
      <Select value={input.value || null} onChange={(event, data) => {
          input.onChange(data.value)
      }} placeholder={placeholder} options={options} multiple={multiple}/>
      {touched && error && <Label basic color='red'>{error}</Label>}
    </FormField>
  );
};

export default SelectInput;
