import { memo, ReactElement } from 'react';

import Slider from '@components/Slider';
import { ISliderRenderItemProps } from '@components/Slider/interfaces';
import { Routes } from '@router/routes';
import { Container } from '@theme/theme';

import { ITestimonialsBlockProps } from './interfaces';
import {
  WrapperContent,
  Wrapper,
  Title,
  SliderItem,
  SliderItemHeader,
  SliderItemContent,
  SliderItemLink,
  SliderItemTitle,
  SliderItemSubtitle,
  SliderItemImage,
  SliderItemText,
} from './styles';

const TestimonialsBlock: React.FC<ITestimonialsBlockProps> = ({
  titleText,
  items,
  slidesToShow,
  slidesToScroll,
  slidesGap,
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
          withBoxShadow={true}
          renderItem={({ id, path, alt, title, subtitle, text }, itemWidth): ReactElement<ISliderRenderItemProps> => {
            return (
              <SliderItem key={id} itemWidth={itemWidth}>
                <SliderItemHeader>
                  <SliderItemLink to={Routes.OUR_TEAM} title={`Go to ${Routes.OUR_TEAM}`}>
                    <SliderItemImage src={path} alt={alt} />
                  </SliderItemLink>
                  <SliderItemContent>
                    <SliderItemTitle>
                      <SliderItemLink to={Routes.OUR_TEAM} title={`Go to ${Routes.OUR_TEAM}`}>
                        {title}
                      </SliderItemLink>
                    </SliderItemTitle>
                    <SliderItemSubtitle>{subtitle}</SliderItemSubtitle>
                  </SliderItemContent>
                </SliderItemHeader>
                <SliderItemText>{text}</SliderItemText>
              </SliderItem>
            );
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default memo(TestimonialsBlock);
