import Logo from 'components/Logo';

import { HeaderData } from 'components/Header/data';

import * as S from './styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.FooterInfo>
          <Logo />
          <S.FooterText>
            Somos especializados em transformar suas <strong>ideias</strong> em{' '}
            <strong>realidade</strong>.
          </S.FooterText>
        </S.FooterInfo>

        <S.FooterInfo>
          <S.FooterList>
            {HeaderData.map((item) => (
              <S.FooterItem key={item.id}>
                <Link href={item.path}>{item.name}</Link>
              </S.FooterItem>
            ))}
          </S.FooterList>
        </S.FooterInfo>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
