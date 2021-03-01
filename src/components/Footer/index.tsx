import Logo from 'components/Logo';
import * as S from './styles';

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
          <S.FooterText>Teste</S.FooterText>
        </S.FooterInfo>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
