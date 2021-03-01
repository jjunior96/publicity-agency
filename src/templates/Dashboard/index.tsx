import Image from 'next/image';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.ImageHome>
          <Image src="/img/home-image.jpg" layout="fill" quality={100} />
        </S.ImageHome>
        <Main>
          <S.Title>
            Explore novas <strong>Experiências.</strong>
          </S.Title>
        </Main>
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Dashboard;
