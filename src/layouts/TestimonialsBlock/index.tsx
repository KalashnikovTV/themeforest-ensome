import { memo, ReactElement } from 'react';

import Slider from '@components/Slider';

import { ISliderRenderItemProps } from '@components/Slider/interfaces';
import { Container } from '@theme/theme';

import { ITestimonialsBlockProps } from './interfaces';

import {
  WrapperContent,
  Wrapper,
  Title,
  TestimonialItem,
  TestimonialHeader,
  TestimonialContent,
  TestimonialTitle,
  TestimonialSubtitle,
  TestimonialImage,
  TestimonialText
} from './styles';

const TestimonialsBlock: React.FC<ITestimonialsBlockProps> = ({
  titleText,
  items,
  slidesToShow,
  slidesToScroll,
  slidesGap
}: ITestimonialsBlockProps) => {
  return (
    <Wrapper>
      <Container>
        <WrapperContent>
          <Title>{titleText}</Title>
        </WrapperContent>

        <Slider
          items={items}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
          slidesGap={slidesGap}
          renderItem={({ id, path, alt, title, subtitle, text }, itemWidth): ReactElement<ISliderRenderItemProps> => {
            return (
              <TestimonialItem key={id} itemWidth={itemWidth}>
                <TestimonialHeader>
                  <TestimonialImage src={path} alt={alt} />
                  <TestimonialContent>
                    <TestimonialTitle>{title}</TestimonialTitle>
                    <TestimonialSubtitle>{subtitle}</TestimonialSubtitle>
                  </TestimonialContent>
                </TestimonialHeader>
                <TestimonialText>{text}</TestimonialText>
              </TestimonialItem>
            );
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default memo(TestimonialsBlock);
