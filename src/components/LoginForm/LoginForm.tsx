import { useForm, SubmitHandler } from 'react-hook-form'; // Forms
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { Input } from 'components/Input/Input';
import { ISignInUser } from 'types/user';
import { INPUT_TYPES } from 'constants/constants';
import { userLogin } from 'redux/auth/authOperations';
import { useAppDispatch } from 'redux/hooks';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInUser>({
    defaultValues: { ...INITIAL_STATE },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ISignInUser> = data => {
    dispatch(userLogin(data));
    reset();
  };

  return (
    <Box as="form" textAlign="center" onSubmit={handleSubmit(onSubmit)}>
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
        Login
      </Button>
    </Box>
  );
};
