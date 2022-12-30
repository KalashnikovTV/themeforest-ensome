import { ReactElement } from 'react';

export interface ISliderItem {
  id: number;
  path: string;
  alt: string;
  title: string;
  subtitle: string;
  text: string;
  date?: string;
}

export interface ISliderProps {
  items: ISliderItem[];
  renderItem: (item: ISliderItem, itemWidth: number) => ReactElement<ISliderRenderItemProps>;
  slidesToShow: number;
  slidesToScroll: number;
  slidesGap: number;
}

export interface ISliderTrackProps {
  position: number;
  gap: number;
}

export interface ISliderRenderItemProps {
  item: ISliderItem;
  itemWidth: number;
}
