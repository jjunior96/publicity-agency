import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
