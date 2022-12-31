import { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { SliderOptions } from '@constants/slider-options';

import { ISliderProps } from './interfaces';
import { Wrapper, SliderContainer, SliderTrack, SliderButtons, SliderButton } from './styles';

const Slider: React.FC<ISliderProps> = ({
  items,
  renderItem,
  slidesToShow,
  slidesToScroll,
  slidesGap,
  withBoxShadow
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
      <SliderContainer ref={containerRef} withBoxShadow={withBoxShadow}>
        <SliderTrack position={position} gap={slidesGap}>
          {items?.map((item) => {
            return renderItem(item, itemWidth);
          })}
        </SliderTrack>
      </SliderContainer>

      <SliderButtons>
        <SliderButton onClick={handleClickPrevButton} disabled={handleDisabledPrevButton} title="Prev button" />
        <SliderButton onClick={handleClickNextButton} disabled={handleDisabledNextButton} title="Next button" />
      </SliderButtons>
    </Wrapper>
  );
};

export default memo(Slider);
