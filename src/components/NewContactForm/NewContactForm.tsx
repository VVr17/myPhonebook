import { useForm, SubmitHandler } from 'react-hook-form'; // Forms
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup'; // for React-hook-form work with Yup
import * as yup from 'yup'; // Form validation
import { toast } from 'react-toastify'; // Notifications
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { INPUT_TYPES } from 'constants/constants';
import { Loader } from 'components/Loader/Loader';
import { contactsSelectors } from 'redux/contacts/contactsSelectors';
import { useAppDispatch } from 'redux/hooks';
import { IContact } from 'types/contacts';
import { addContact } from 'redux/contacts/contactsOperations';
import { Form } from './NewContactForm.styled';
import { Box } from 'components/Box/Box';
import { LinkStyled } from 'components/Navigation/NavLink/NavLink.styled';
import { Modal } from 'components/Modal/Modal';
import { UpdateContactModal } from 'components/UpdateContactModal/UpdateContactModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(20, 'Name should be at most 20 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const NewContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectLoading);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [duplicatedContact, setDuplicatedContact] = useState<IContact | null>(
    null
  );
  const toggleModal = () => setModalIsOpen(prevModalState => !prevModalState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<IContact, 'id'>>({
    defaultValues: { ...INITIAL_STATE },
    resolver: yupResolver(validationSchema),
  });

  const isInPhoneBook = (name: string, contacts: IContact[] = []) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  const onSubmit: SubmitHandler<Omit<IContact, 'id'>> = data => {
    const { name } = data;
    const contactIsInPhoneBook = isInPhoneBook(name, contacts);

    if (contacts && contactIsInPhoneBook) {
      toast.warn(`${name?.toUpperCase()} is already in CONTACTS`);
      const { id } = contactIsInPhoneBook;

      setDuplicatedContact({ ...data, id });
      toggleModal();
      return;
    }

    dispatch(addContact(data));
    navigate('/contacts');
    reset();
  };

  return (
    /* "handleSubmit" will validate inputs before invoking "onSubmit" */
    <>
      {/* "handleSubmit" will validate inputs before invoking "onSubmit"  */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Name"
          register={register}
          error={errors.name}
        />
        <Input
          type={INPUT_TYPES.tel}
          name="number"
          placeholder="Phone number"
          register={register}
          error={errors.number}
        />
        <Loader isLoading={isLoading} />
        <Box
          display={['flex']}
          justifyContent={'space-between'}
          maxWidth="280px"
          mx="auto"
        >
          <Button type="submit" name="primary" disabled={modalIsOpen}>
            Add Contact
          </Button>
          <LinkStyled to="/contacts">To Contacts</LinkStyled>
        </Box>
      </Form>
      {modalIsOpen && (
        <Modal closeModal={toggleModal}>
          {duplicatedContact && (
            <UpdateContactModal
              contactToUpdate={duplicatedContact}
              closeModal={toggleModal}
            />
          )}
        </Modal>
      )}
    </>
  );
};
