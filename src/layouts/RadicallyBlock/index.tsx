import { AppRoutes } from '@constants/app-routes';

import { Wrapper, Image, WrapperContent, Title, Paragraph, LinkLearn } from './styles';

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
        <LinkLearn to={AppRoutes.solutions} title={`Go to ${AppRoutes.solutions}`}>
          Learn more
        </LinkLearn>
      </WrapperContent>
    </Wrapper>
  );
};

export default RadicallyBlock;
