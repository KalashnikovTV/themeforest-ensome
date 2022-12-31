import { ISliderItem } from '@components/Slider/interfaces';

export interface IBlogMiniBlockProps {
  titleText: string;
  items: ISliderItem[];
  slidesToShow: number;
  slidesToScroll: number;
  slidesGap: number;
}

export interface ISliderItemProps {
  itemWidth: number;
}
