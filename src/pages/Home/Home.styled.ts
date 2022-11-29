import styled from '@emotion/styled';
import { mq } from 'constants/mediaConstants';

export const Title = styled.h1`
  display: block;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.accentTextColor};
  line-height: 1.18;
  letter-spacing: 0.05em;
  text-align: center;

  ${mq.medium} {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
