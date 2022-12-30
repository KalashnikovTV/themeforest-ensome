export interface ISliderProps {
  items: {
    id: number;
    path: string;
    alt: string;
    title: string;
    subtitle: string;
    text: string;
    date?: string;
  }[];
  itemsCardAs: 'blog' | 'testimonials';
  slidesToShow: number;
  slidesToScroll: number;
  slidesGap: number;
}

export interface ISliderTrackProps {
  position: number;
  gap: number;
}

export interface ISliderItemProps {
  itemWidth: number;
}
