import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { Contacts } from './ContactList.styled';
import { contactsSelectors } from 'redux/contacts/contactsSelectors';

export const ContactList: React.FC = () => {
  const filteredContacts = useSelector(
    contactsSelectors.selectFilteredContacts
  );

  return (
    <Contacts>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </Contacts>
  );
};
