import { memo } from 'react';

import Breadcrumbs from '@components/Breadcrumbs';
import { Container } from '@theme/theme';

import { IPageHeaderBlockProps } from './interfaces';
import { Description, Subtitle, Title, Wrapper, WrapperContent, WrapperDetailed } from './styles';

const PageHeaderBlock: React.FC<IPageHeaderBlockProps> = ({
  title,
  subtitle,
  description = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
  isDetailed = false
}: IPageHeaderBlockProps) =>
  !isDetailed ? (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Breadcrumbs />
      </Container>
    </Wrapper>
  ) : (
    <WrapperDetailed>
      <Container>
        {subtitle && <Breadcrumbs />}
        <WrapperContent>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </WrapperContent>
      </Container>
    </WrapperDetailed>
  );

export default memo(PageHeaderBlock);
