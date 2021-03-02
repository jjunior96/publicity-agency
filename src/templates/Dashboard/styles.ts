import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
  display: flex;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.white};
    font-size: 5.2rem;
    max-width: 420px;
    margin-top: 20vh;

    strong {
      font-size: 7rem;
      border-bottom: 4px solid ${theme.colors.primary};
    }

    @media (max-width: 768px) {
      max-width: 320px;
      font-size: 3.2rem;
      line-height: 4.4rem;

      strong {
        font-size: 5.2rem;
        font-weight: bold;
        border-bottom: 2px solid ${theme.colors.primary};
        line-height: 5rem;
      }
    }
  `}
`;

export const ImageHome = styled.div`
  img {
    width: 100vw;
    height: 100vh;
    opacity: 0.3;
  }
`;

export const Section = styled.section``;
