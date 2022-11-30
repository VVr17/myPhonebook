import { IContact } from './contacts';
import { IUser } from './user';

// Define a type for the slice state
export interface IAuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export interface IContactsState {
  items: IContact[];
  isLoading: boolean;
  error: string | null;
}
