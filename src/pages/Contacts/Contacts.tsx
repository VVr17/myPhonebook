import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { contactsSelectors } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Filter } from 'components/Filter/Filter';
import { LinkStyled } from 'components/Navigation/NavLink/NavLink.styled';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { Text } from './Contacts.styled';
import { useAppDispatch } from 'redux/hooks';

const Contacts = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectLoading);
  const filteredContacts = useSelector(
    contactsSelectors.selectFilteredContacts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Contacts">
      {contacts?.length > 0 && <Filter />}
      <Loader isLoading={isLoading} />
      {filteredContacts.length > 0 ? (
        <ContactList />
      ) : (
        <Text>There are no contacts</Text>
      )}
      <LinkStyled to="/newContact">Add new contact</LinkStyled>
    </Section>
  );
};

export default Contacts;
