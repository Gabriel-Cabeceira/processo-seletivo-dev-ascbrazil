import { Input, DivInput, ErrorText } from './input.styles';
import { ReactNode, useState } from 'react';

type InputFieldProps = {
  name: string;
  value: any;
  onChange: any;
  leftIcon: ReactNode;
  inputType: string;
  placeholder: string;
  errorMessage?: any;
};

const InputField = ({
  name,
  value,
  onChange,
  leftIcon,
  inputType,
  placeholder,
  errorMessage,
  ...rest
}: InputFieldProps) => {
  return (
    <>
      <DivInput>
        {leftIcon}
        <Input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          {...rest}
        />
      </DivInput>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export { InputField }