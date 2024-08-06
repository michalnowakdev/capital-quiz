import { Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
`;

export const PuzzlesWrapper = styled.div`
  max-height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1em;
  gap: 1em;

  button {
    min-height: 120px;
    max-height: 200px;
  }

  @media (min-width: 770px) {
    grid-template-columns: repeat(3, 1fr);

    button {
      min-height: 150px;
    }
  }
`;

const rotateslide = keyframes`   
  0% {
    transform: rotate(-2deg)
  }
  50% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-2deg);
  }
`;

export const ErrorButton = styled(Button)`
  animation: ${rotateslide} 0.2s linear infinite;
`;
