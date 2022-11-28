import styled from '@emotion/styled';

export const FilterLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.semiBold};

  input {
    margin-top: ${p => p.theme.space[1]}px;
    padding: ${p => p.theme.space[2]}px;
    outline: transparent;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.inputText};
    border-radius: ${p => p.theme.radii.normal};
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      border-color: ${p => p.theme.colors.secondaryColor};
    }
  }
`;
