import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { IContact } from 'types/contacts';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from 'components/Section/Section';
import { Text } from './App.styled';

const LOCAL_STORAGE_KEY = {
  contacts: 'contacts',
};

export const App: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>(() => {
    const contacts = localStorage.getItem(LOCAL_STORAGE_KEY.contacts);
    if (typeof contacts === 'string') return JSON.parse(contacts);
    return [];
  });
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.contacts, JSON.stringify(contacts));
  }, [contacts]);

  function addContact({ name, number }: Omit<IContact, 'id'>) {
    const contact = {
      name,
      number,
      id: nanoid().slice(0, 8),
    };
    setContacts(prevContacts => [...prevContacts, contact]);
    toast.success(`${name.toUpperCase()} successfully added to CONTACTS`);
  }

  function deleteContact(idToDelete: string) {
    const contactToDelete = contacts.find(({ id }) => id === idToDelete);

    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== idToDelete)
    );
    toast.info(`${contactToDelete?.name.toUpperCase()} deleted from CONTACTS`);
  }

  function changeFilter(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <div>
      <AppBar />
      <Box as="main" bg="mainBackgroundColor">
        <Section title="Create new contact">
          <NewContactForm onFormSubmit={addContact} contacts={contacts} />
        </Section>
        <Section title="Contacts">
          {contacts?.length > 0 && (
            <Filter value={filter} onChange={changeFilter} />
          )}
          {getFilteredContacts().length > 0 ? (
            <ContactList
              contacts={getFilteredContacts()}
              onDeleteContact={deleteContact}
            />
          ) : (
            <Text>There are no contacts</Text>
          )}
        </Section>
        <ToastContainer autoClose={3000} theme="colored" />
      </Box>
    </div>
  );
};
