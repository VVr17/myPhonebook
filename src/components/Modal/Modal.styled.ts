import styled from '@emotion/styled';
import { mq } from 'constants/mediaConstants';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1200;

  padding: ${p => p.theme.space[3]}px;
  margin: 0;
  background-color: ${p => p.theme.colors.backdropColor};
`;

export const ModalStyled = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.boxShadow.second};
  border-radius: ${p => p.theme.radii.normal};

  width: 95%;
  max-width: 480px;
  max-height: 95%;
  overflow-y: scroll;

  ${mq.medium} {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    padding: ${p => p.theme.space[4]}px;
  }
`;
