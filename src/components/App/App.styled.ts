import styled from '@emotion/styled';

export const Text = styled.p`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.semiBold};
`;
