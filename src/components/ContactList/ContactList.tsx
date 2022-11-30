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
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </Contacts>
  );
};
