import {
  Ref,
  MultipleFieldErrors,
  Message,
  UseFormRegister,
} from 'react-hook-form'; // Forms
import { LabelStyled, ErrorText, InputStyled } from './Input.styled';

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

interface IProps {
  type?: string;
  name: 'number' | 'name';
  placeholder?: string;
  register: UseFormRegister<{
    name: string;
    number: string;
  }>;
  error: FieldError | undefined;
}

export const Input: React.FC<IProps> = ({
  type = 'text',
  name,
  placeholder,
  register,
  error,
}) => {
  return (
    <LabelStyled>
      {name}
      <InputStyled
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
        aria-invalid={error ? 'true' : 'false'}
        border={error ? 'red' : 'btnColor'}
        backgroundColor={error ? 'bgErrorColor' : ''}
      />
      {error && <ErrorText>{error?.message}</ErrorText>}
    </LabelStyled>
  );
};
