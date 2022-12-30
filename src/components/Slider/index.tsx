import { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { SliderOptions } from '@constants/slider-options';

import { ISliderProps } from './interfaces';
import {
  Wrapper,
  SliderContainer,
  SliderTrack,
  SliderButtons,
  SliderButton,
  TestimonialItem,
  TestimonialHeader,
  TestimonialContent,
  TestimonialTitle,
  TestimonialSubtitle,
  TestimonialImage,
  TestimonialText
} from './styles';

const Slider: React.FC<ISliderProps> = ({
  items,
  itemsCardAs,
  slidesToShow,
  slidesToScroll,
  slidesGap
}: ISliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(SliderOptions.slidesPosition);
  const [itemWidth, setItemWidth] = useState(SliderOptions.defaultItemWidth);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setItemWidth(Math.round((containerRef.current.clientWidth - slidesGap * (slidesToShow - 1)) / slidesToShow));
    }
  }, [containerRef, slidesGap, slidesToShow]);

  const itemsCount = useMemo(() => items?.length, [items]);

  const movePosition = useMemo(() => slidesToScroll * itemWidth + slidesGap, [itemWidth, slidesGap, slidesToScroll]);

  const handleDisabledPrevButton = useMemo(() => position === SliderOptions.slidesPosition, [position]);

  const handleDisabledNextButton = useMemo(
    () => position <= -(itemsCount - slidesToShow) * itemWidth + slidesGap,
    [itemWidth, itemsCount, position, slidesGap, slidesToShow]
  );

  const handleClickNextButton = useCallback((): void => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth + slidesGap;

    setPosition((prev) => prev - (itemsLeft >= slidesToScroll ? movePosition : itemWidth * itemWidth));
  }, [itemWidth, itemsCount, movePosition, position, slidesGap, slidesToScroll, slidesToShow]);

  const handleClickPrevButton = useCallback((): void => {
    const itemsLeft = Math.abs(position) / itemWidth + slidesGap;

    setPosition((prev) => prev + (itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth));
  }, [itemWidth, movePosition, position, slidesGap, slidesToScroll]);

  return (
    <Wrapper>
      <SliderContainer ref={containerRef}>
        <SliderTrack position={position} gap={slidesGap}>
          {items?.map(({ id, path, alt, title, subtitle, text }) => {
            // TODO придумать что-то, чтобы разделить и вынести карточки (передавая itemWidth)
            if (itemsCardAs === 'testimonials') {
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
            }
          })}
        </SliderTrack>
      </SliderContainer>

      <SliderButtons>
        <SliderButton onClick={handleClickPrevButton} disabled={handleDisabledPrevButton} />
        <SliderButton onClick={handleClickNextButton} disabled={handleDisabledNextButton} />
      </SliderButtons>
    </Wrapper>
  );
};

export default memo(Slider);
