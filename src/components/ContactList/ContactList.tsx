import { Contact } from '../Contact/Contact';
import { Contacts } from './ContactList.styled';
import { IContact } from 'types/contacts';

interface IProps {
  contacts: IContact[];
  onDeleteContact: (idToDelete: string) => void;
}

export const ContactList: React.FC<IProps> = ({
  contacts,
  onDeleteContact,
}) => {
  return (
    <Contacts>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </Contacts>
  );
};
