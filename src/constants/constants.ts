export const LOCAL_STORAGE_KEY: { readonly auth: string } = {
  auth: 'auth',
};

export const BASE_URL: string = 'https://connections-api.herokuapp.com';

interface IInputTypes {
  readonly password: string;
  readonly text: string;
  readonly tel: string;
  readonly email: string;
}

export const INPUT_TYPES: IInputTypes = {
  password: 'password',
  text: 'text',
  tel: 'tel',
  email: 'email',
};
