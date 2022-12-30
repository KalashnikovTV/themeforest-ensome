export interface ITestimonialsBlockProps {
  title: string;
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
