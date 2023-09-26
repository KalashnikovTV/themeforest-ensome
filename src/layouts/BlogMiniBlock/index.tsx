import { memo, ReactElement } from 'react';

import LinkReadMore from '@components/LinkReadMore';
import Slider from '@components/Slider';

import { ISliderRenderItemProps } from '@components/Slider/interfaces';
import { Routes } from '@router/routes';
import { Container } from '@theme/theme';

import { IBlogMiniBlockProps } from './interfaces';

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

const BlogMiniBlock: React.FC<IBlogMiniBlockProps> = ({
  titleText,
  items,
  slidesToShow,
  slidesToScroll,
  slidesGap,
}: IBlogMiniBlockProps) => {
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
          withBoxShadow={false}
          renderItem={({ id, path, alt, title, subtitle, text }, itemWidth): ReactElement<ISliderRenderItemProps> => {
            return (
              <SliderItem key={id} itemWidth={itemWidth}>
                <SliderItemHeader>
                  <SliderItemLink to={`${Routes.BLOG}/${id}`} title={`Go to ${Routes.BLOG}/${id}`}>
                    <SliderItemImage src={path} alt={alt} />
                  </SliderItemLink>
                  <SliderItemContent>
                    <SliderItemSubtitle>{subtitle}</SliderItemSubtitle>
                    <SliderItemTitle>
                      <SliderItemLink to={`${Routes.BLOG}/${id}`} title={`Go to ${Routes.BLOG}/${id}`}>
                        {title}
                      </SliderItemLink>
                    </SliderItemTitle>
                  </SliderItemContent>
                </SliderItemHeader>
                <SliderItemText>{text}</SliderItemText>
                <LinkReadMore path={`${Routes.BLOG}/${id}`} />
              </SliderItem>
            );
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default memo(BlogMiniBlock);
