import styled from '@emotion/styled';
import { containerWidth, mq } from 'constants/mediaConstants';

export const Container = styled.div`
  margin: 0 auto;
  ${mq.medium} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${containerWidth[2]};
  }

  ${mq.large} {
    max-width: ${containerWidth[3]};
  }
`;
