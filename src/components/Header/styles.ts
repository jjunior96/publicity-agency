import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.contentHeight.sidebar};
    position: fixed;
    top: 0;
    /* background-color: ${theme.colors.white}; */
    backdrop-filter: blur(5px);
    box-shadow: ${theme.box.shadow};
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem 2rem;
  `}
`;

export const IconContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;

    svg {
      color: #fff;
    }
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    list-style: none;

    a {
      text-decoration: none;
      color: ${theme.colors.white};
      padding: 0.5rem 0;

      &:hover {
        color: ${theme.colors.primary};
        border-bottom: 2px solid ${theme.colors.primary};
      }
    }

    & + li {
      margin-left: 2rem;
    }
  `}
`;
