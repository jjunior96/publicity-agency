import Link from 'next/link';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';

import * as S from './styles';

type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
};

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <S.Container>
      <Link href={href}>{children}</Link>
    </S.Container>
  );
};

export default LinkWrapper;
