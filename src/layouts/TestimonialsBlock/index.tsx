import { memo, ReactElement } from 'react';

import Slider from '@components/Slider';

import { ISliderRenderItemProps } from '@components/Slider/interfaces';
import { AppRoutes } from '@constants/app-routes';
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
  SliderItemText
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
              <SliderItem key={id} itemWidth={itemWidth}>
                <SliderItemHeader>
                  <SliderItemLink to={AppRoutes.ourTeam} title={`Go to ${AppRoutes.ourTeam}`}>
                    <SliderItemImage src={path} alt={alt} />
                  </SliderItemLink>
                  <SliderItemContent>
                    <SliderItemTitle>
                      <SliderItemLink to={AppRoutes.ourTeam} title={`Go to ${AppRoutes.ourTeam}`}>
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
