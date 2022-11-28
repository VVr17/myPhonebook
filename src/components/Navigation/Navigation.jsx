// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth/authSelectors';
// import { authNavItems, userNavItems } from 'constants/navItems';
// import { Link, NavigationStyled } from './Navigation.styled';
import { NavigationStyled } from './Navigation.styled';
// import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  // const navigation = isLoggedIn ? userNavItems : authNavItems;

  return (
    <>
      <NavigationStyled>
        <ul>
          <li>home</li>
          <li>contacts</li>
          <li>add contacts</li>
        </ul>
      </NavigationStyled>
      {/* <NavigationStyled>
        <ul>
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </NavigationStyled>
      {isLoggedIn && <UserMenu />} */}
    </>
  );
};

// const authNavItems = [
//   { href: 'register', label: 'Register' },
//   { href: 'login', label: 'Login' },
// ];

// const userNavItems = [
//   { href: 'Contacts', label: 'Contacts' },
//   { href: 'NewContact', label: 'Add contact' },
// ];

// export const Navigation = () => {
//   const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
//   const navigation = isLoggedIn ? userNavItems : authNavItems;
//   console.log('isLoggedIn', isLoggedIn);

//   return (
//     <>
//       <NavigationStyled>
//         <ul>
//           {navigation.map(({ href, label }) => (
//             <li key={href}>
//               <Link to={href}>{label}</Link>
//             </li>
//           ))}
//         </ul>
//       </NavigationStyled>
//       {isLoggedIn && <UserMenu />}
//     </>
//   );
// };
