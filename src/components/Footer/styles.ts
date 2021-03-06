import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.contentHeight.footer};
    background-color: ${theme.colors.darkGray};
    bottom: 0;
    display: flex;
    align-items: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const FooterInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FooterText = styled.p`
  margin-top: 1.6rem;
  max-width: 210px;
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
`;

export const FooterList = styled.ul``;

export const FooterItem = styled.li`
  ${({ theme }) => css`
    font-size: 1.2rem;
    list-style: none;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${theme.colors.primary};
        /* border-bottom: 2px solid ${theme.colors.primary}; */
      }
    }

    & + li {
      margin-top: 1.6rem;
    }
  `}
`;
