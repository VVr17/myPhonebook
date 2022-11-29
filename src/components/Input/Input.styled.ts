import styled from '@emotion/styled';

export const LabelStyled = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.semiBold};
  text-transform: capitalize;
  color: ${p => p.theme.colors.mainText};

  :last-of-type {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  :focus-within {
    color: ${p => p.theme.colors.accent};
  }
`;

type inputProps = {
  backgroundColor: 'bgErrorColor' | '';
  border: string;
};

export const InputStyled = styled.input<inputProps>`
  margin-top: ${p => p.theme.space[1]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  outline: transparent;
  background-color: ${p =>
    p.theme.colors[p.backgroundColor] || p.theme.colors.white};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors[p.border]};
  border-radius: ${p => p.theme.space[1]}px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: ${p => p.theme.colors.secondaryColor};
  }
`;

export const ErrorText = styled.p`
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: lowercase;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 31px;
  left: 8px;
`;
