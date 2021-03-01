import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from 'components/Logo';

import { HeaderData } from './data';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.IconContainer>
          <GiHamburgerMenu size={26} />
        </S.IconContainer>

        <S.MenuContainer>
          {HeaderData.map((item) => (
            <S.MenuItem key={item.id}>
              <Link href={item.path}>{item.name}</Link>
            </S.MenuItem>
          ))}
        </S.MenuContainer>
      </S.Content>
    </S.Container>
  );
};

export default Header;
