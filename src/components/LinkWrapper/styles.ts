import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;
  z-index: 1000;
  cursor: pointer;

  svg {
    color: #7159c1;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: ${shade(0.2, '#7159c1')};
    }
  }
`;
