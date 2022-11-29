import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { Button } from 'components/Button/Button';
import { MdLogout } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';
import { userLogout } from 'redux/auth/authOperations';
import { UserMenuStyled } from './UserMenu.styled';
import { useAppDispatch } from 'redux/hooks';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const userEmail = useSelector(authSelectors.selectUserEmail);
  const userName = useSelector(authSelectors.selectUserName);

  return (
    <UserMenuStyled>
      <p>
        <FaUserLock />
        {userEmail}
      </p>
      <Button
        name="darkMode"
        onClick={() => userName && dispatch(userLogout(userName))}
      >
        Logout
        <MdLogout />
      </Button>
    </UserMenuStyled>
  );
};
