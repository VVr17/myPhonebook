import { FilterLabelStyled } from './Filter.styled';

interface IProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Filter: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <FilterLabelStyled>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FilterLabelStyled>
  );
};
