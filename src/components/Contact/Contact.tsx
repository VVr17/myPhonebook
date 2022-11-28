import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { ContactStyled } from './Contact.styled';

interface IProps {
  name: string;
  number: string;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

export const Contact: React.FC<IProps> = ({ name, number, onDelete }) => (
  <ContactStyled>
    <Box display={['block', 'flex']}>
      <p>{name}:</p>
      <p>{number}</p>
    </Box>
    <Button onClick={onDelete}>Delete</Button>
  </ContactStyled>
);
