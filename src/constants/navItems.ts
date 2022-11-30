interface INavLink {
  readonly href: string;
  readonly label: string;
}

export const authNavItems: INavLink[] = [
  { href: '/', label: 'Home' },
  { href: 'register', label: 'Register' },
  { href: 'login', label: 'Login' },
];

export const userNavItems: INavLink[] = [
  { href: 'Contacts', label: 'Contacts' },
  { href: 'NewContact', label: 'Add contact' },
];
