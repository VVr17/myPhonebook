import styled from '@emotion/styled';
import { mq } from 'constants/mediaConstants';

export const ContactStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: ${p => p.theme.space[1]}px;
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeight.semiBold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.18;
  }

  ${mq.medium} {
    margin-bottom: 0;
    font-size: ${p => p.theme.fontSizes.s};

    :not(:last-of-type) {
      margin-right: ${p => p.theme.space[3]}px;
    }
  }

  ${mq.large} {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
