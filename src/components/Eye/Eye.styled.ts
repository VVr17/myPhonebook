import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  font-size: 0;
  width: 0;
  height: 0;
  cursor: pointer;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.secondaryColor};
  outline: none;

  svg {
    position: absolute;
    top: 29px;
    right: 12px;
    width: 20px;
    height: 20px;
    fill: ${p => p.theme.colors.mainText};
  }

  :hover svg,
  :focus svg {
    fill: ${p => p.theme.colors.accent};
  }
`;
