import Image from 'next/image';

import * as S from './styles';

const Logo = () => {
  return (
    <S.Container href="/">
      <Image src="/assets/logo.svg" width={40} height={40} />
    </S.Container>
  );
};

export default Logo;
