import styled from '@emotion/styled';
import { mq } from 'constants/mediaConstants';

export const Contacts = styled.ul`
  list-style: none;
  margin-bottom: ${p => p.theme.space[4]}px;

  li {
    padding: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.space[1]}px;
    box-shadow: ${p => p.theme.boxShadow.first};
    background-color: ${p => p.theme.colors.backgroundContactCardColor};

    :not(:last-of-type) {
      margin-bottom: ${p => p.theme.space[2]}px;
    }

    ${mq.medium} {
      padding: ${p => p.theme.space[3]}px;
    }

    ${mq.large} {
      padding: ${p => p.theme.space[4]}px;
    }
  }
`;
