import { memo } from 'react';

import Slider from '@components/Slider';

import { Container } from '@theme/theme';

import { ITestimonialsBlockProps } from './interfaces';

import { WrapperContent, Wrapper, Title } from './styles';

const TestimonialsBlock: React.FC<ITestimonialsBlockProps> = ({
  title,
  items,
  itemsCardAs,
  slidesToShow,
  slidesToScroll,
  slidesGap
}: ITestimonialsBlockProps) => {
  return (
    <Wrapper>
      <Container>
        <WrapperContent>
          <Title>{title}</Title>
        </WrapperContent>

        <Slider
          items={items}
          itemsCardAs={itemsCardAs}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          slidesGap={slidesGap}
        />
      </Container>
    </Wrapper>
  );
};

export default memo(TestimonialsBlock);
