import { useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { FilterLabelStyled } from './Filter.styled';
import { selectFilter } from 'redux/filter/filterSelectors';
import { useAppDispatch } from 'redux/hooks';

export const Filter: React.FC = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  return (
    <FilterLabelStyled>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </FilterLabelStyled>
  );
};
