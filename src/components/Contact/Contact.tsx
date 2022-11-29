import { useState } from 'react';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { ContactStyled } from './Contact.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Modal } from 'components/Modal/Modal';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';
import { useAppDispatch } from 'redux/hooks';

interface IProps {
  name: string;
  number: string;
  id: string;
}

export const Contact: React.FC<IProps> = ({ name, number, id }) => {
  const dispatch = useAppDispatch();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const toggleModal = () => setModalIsOpen(prevModalState => !prevModalState);

  return (
    <>
      <ContactStyled>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gridGap="8px"
        >
          <p>{name}:</p>
          <p>{number}</p>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          gridGap="16px"
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={() => toggleModal()}>Update</Button>
          <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </Box>
      </ContactStyled>
      {modalIsOpen && (
        <Modal closeModal={toggleModal}>
          <UpdateContactForm
            closeModal={toggleModal}
            name={name}
            id={id}
            number={number}
          />
        </Modal>
      )}
    </>
  );
};
