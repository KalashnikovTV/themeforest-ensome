import { memo } from 'react';

import Breadcrumbs from '@components/Breadcrumbs';
import { Container } from '@theme/theme';

import { IPageHeaderBlockProps } from './interfaces';
import { Description, Subtitle, Title, Wrapper, WrapperContent, WrapperDetailed } from './styles';

const PageHeaderBlock: React.FC<IPageHeaderBlockProps> = ({
  title: titleBlock,
  subtitle,
  description = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
  isDetailed = false,
  omitIndexList = null
}: IPageHeaderBlockProps) =>
  !isDetailed ? (
    <Wrapper>
      <Container>
        <Title>{titleBlock}</Title>
        <Breadcrumbs transformLastLabel={(): string => titleBlock} omitIndexList={omitIndexList} />
      </Container>
    </Wrapper>
  ) : (
    <WrapperDetailed>
      <Container>
        {subtitle && <Breadcrumbs transformLastLabel={(): string => subtitle} omitIndexList={omitIndexList} />}
        <WrapperContent>
          <Subtitle>{subtitle}</Subtitle>
          <Title>{titleBlock}</Title>
          <Description>{description}</Description>
        </WrapperContent>
      </Container>
    </WrapperDetailed>
  );

export default memo(PageHeaderBlock);
