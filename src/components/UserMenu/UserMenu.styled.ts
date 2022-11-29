import styled from '@emotion/styled';
import { mq } from 'constants/mediaConstants';

export const UserMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mq.smallOnly} {
    margin-top: ${p => p.theme.space[3]}px;
  }

  ${mq.medium} {
    align-items: center;
    flex-direction: row;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${p => p.theme.colors.secondaryTextColor};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: 600;

    ${mq.smallOnly} {
      margin-bottom: ${p => p.theme.space[3]}px;
    }

    ${mq.medium} {
      margin-right: ${p => p.theme.space[4]}px;
    }

    svg {
      margin-right: ${p => p.theme.space[2]}px;
    }
  }
`;
