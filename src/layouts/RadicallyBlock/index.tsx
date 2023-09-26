import LinkMore from '@components/LinkMore';
import { Routes } from '@router/routes';

import { Wrapper, Image, WrapperContent, Title, Paragraph } from './styles';

const RadicallyBlock: React.FC = () => {
  return (
    <Wrapper>
      <Image />
      <WrapperContent>
        <Title>Radically new solutions for data</Title>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <LinkMore path={Routes.SOLUTIONS} width={190} height={54} aria-label="Learn more about solutions">
          Learn more
        </LinkMore>
      </WrapperContent>
    </Wrapper>
  );
};

export default RadicallyBlock;
