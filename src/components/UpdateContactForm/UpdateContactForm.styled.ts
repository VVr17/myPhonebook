import styled from '@emotion/styled';
import { mq } from 'constants/mediaConstants';

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h2`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.18;
  letter-spacing: 0.05em;
  color: ${p => p.theme.colors.accentTextColor};
  text-align: center;

  ${mq.medium} {
    font-size: ${p => p.theme.fontSizes.m};
  }

  ${mq.large} {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
