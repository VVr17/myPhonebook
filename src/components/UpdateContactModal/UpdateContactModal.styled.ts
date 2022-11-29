import styled from '@emotion/styled';
import { mq } from 'constants/mediaConstants';

export const Container = styled.div`
  min-width: 200px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: ${p => p.theme.fontWeight.bold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.18;
    letter-spacing: 0.05em;
    color: ${p => p.theme.colors.accentTextColor};
    text-align: center;

    :last-of-type {
      margin-bottom: ${p => p.theme.space[3]}px;

      ${mq.medium} {
        margin-bottom: ${p => p.theme.space[4]}px;
      }
    }

    ${mq.medium} {
      font-size: ${p => p.theme.fontSizes.m};
    }

    ${mq.large} {
      font-size: ${p => p.theme.fontSizes.l};
    }
  }
`;
