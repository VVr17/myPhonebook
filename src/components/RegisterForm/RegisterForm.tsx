import { useForm, SubmitHandler } from 'react-hook-form'; // Forms
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { INPUT_TYPES } from 'constants/constants';
import { ISignUpUser } from 'types/user';
import { userRegister } from 'redux/auth/authOperations';
import { useAppDispatch } from 'redux/hooks';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(20, 'Name should be at most 20 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  email: yup
    .string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'For example: email@email.com')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Name should be at least 7 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/,
      'Password should be at least 8 characters and contain at least one lower case, one upper case, one number'
    )
    .required('Password is required'),
});

export const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignUpUser>({
    defaultValues: { ...INITIAL_STATE },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ISignUpUser> = data => {
    dispatch(userRegister(data));
    reset();
  };

  return (
    <Box as="form" textAlign="center" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        placeholder="Name"
        register={register}
        error={errors.name}
      />
      <Input
        type={INPUT_TYPES.email}
        name="email"
        placeholder="E-mail"
        register={register}
        error={errors.email}
      />
      <Input
        type={INPUT_TYPES.password}
        name="password"
        placeholder="Password"
        register={register}
        error={errors.password}
      />
      <Button type="submit" name="primary">
        Register
      </Button>
    </Box>
  );
};
