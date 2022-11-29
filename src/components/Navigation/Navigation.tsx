import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { authNavItems, userNavItems } from 'constants/navItems';
import { Link, NavigationStyled } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigation = isLoggedIn ? userNavItems : authNavItems;

  return (
    <>
      <NavigationStyled>
        <ul>
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </NavigationStyled>
      {isLoggedIn && <UserMenu />}
    </>
  );
};
