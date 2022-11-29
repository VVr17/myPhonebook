export interface IUser {
  name: string | null;
  email: string | null;
}

export interface ISignUpUser {
  name: string;
  email: string;
  password: string;
}

export interface ISignInUser {
  email: string;
  password: string;
}

export interface IUserDb {
  user: IUser;
  token: string;
}
