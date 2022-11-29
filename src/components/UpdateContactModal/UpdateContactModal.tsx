import { useNavigate } from 'react-router-dom/dist';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { Container } from './UpdateContactModal.styled';
import { IContact } from 'types/contacts';
import { updateContact } from 'redux/contacts/contactsOperations';
import { useAppDispatch } from 'redux/hooks';

interface IProps {
  contactToUpdate: IContact;
  closeModal: () => void;
}

export const UpdateContactModal: React.FC<IProps> = ({
  contactToUpdate,
  closeModal,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onUpdateContact() {
    dispatch(updateContact(contactToUpdate));
    closeModal();
    navigate('/contacts');
  }

  return (
    <Container>
      <p>User {contactToUpdate.name.toUpperCase()} is already in Contacts.</p>
      <p>Do you want to update it?</p>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridGap="16px"
      >
        <Button onClick={onUpdateContact} name="primary">
          Update
        </Button>
        <Button name="primary" onClick={closeModal}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
};
