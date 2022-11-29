import { Eye } from 'components/Eye/Eye';
import { INPUT_TYPES } from 'constants/constants';
import { useState } from 'react';
import {
  Ref,
  MultipleFieldErrors,
  Message,
  UseFormRegister,
} from 'react-hook-form'; // Forms
import { LabelStyled, ErrorText, InputStyled, InputIcon } from './Input.styled';
import { FaUserEdit, FaPencilAlt } from 'react-icons/fa';
import { MdEmail, MdLock, MdOutlinePhoneAndroid } from 'react-icons/md';

export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};

interface IProps {
  type?: string;
  name: 'number' | 'name' | 'password' | 'email';
  placeholder?: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
}

export const Input: React.FC<IProps> = ({
  type = INPUT_TYPES.text,
  name,
  placeholder,
  register,
  error,
}) => {
  const [inputType, setInputType] = useState<string>(type);

  const toggleInputType: React.MouseEventHandler<HTMLDivElement> = event => {
    inputType === INPUT_TYPES.password
      ? setInputType(INPUT_TYPES.text)
      : setInputType(INPUT_TYPES.password);
  };

  return (
    <LabelStyled>
      {name}
      <InputIcon> {getIcon(type)}</InputIcon>
      <InputStyled
        type={inputType}
        placeholder={placeholder}
        {...register(name, { required: true })}
        aria-invalid={error ? 'true' : 'false'}
        border={error ? 'red' : 'btnColor'}
        backgroundColor={error ? 'bgErrorColor' : ''}
      />
      {error && <ErrorText>{error?.message}</ErrorText>}
      {type === INPUT_TYPES.password && (
        <Eye
          onClick={toggleInputType}
          isVisible={inputType !== INPUT_TYPES.password}
        />
      )}
    </LabelStyled>
  );
};

function getIcon(type: string) {
  switch (type) {
    case INPUT_TYPES.text:
      return <FaUserEdit />;
    case INPUT_TYPES.password:
      return <MdLock />;
    case INPUT_TYPES.email:
      return <MdEmail />;
    case INPUT_TYPES.tel:
      return <MdOutlinePhoneAndroid />;
    default:
      return <FaPencilAlt />;
  }
}
