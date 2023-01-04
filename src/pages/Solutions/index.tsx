import { SliderOptions } from '@constants/slider-options';
import HelpBlock from '@layouts/HelpBlock';
import PageHeaderBlock from '@layouts/PageHeaderBlock';
import SolutionsServicesBlock from '@layouts/SolutionsServicesBlock';
import SolutionsWhyBlock from '@layouts/SolutionsWhyBlock';
import SubscribeBlock from '@layouts/SubscribeBlock';
import TestimonialsBlock from '@layouts/TestimonialsBlock';
import { TESTIMONIALS_DATA } from '@mocks/data';
import { theme } from '@theme/theme';

const Solutions: React.FC = () => {
  return (
    <>
      <PageHeaderBlock
        isDetailed
        title="Data analytics solutions"
        subtitle="Solutions"
        description="Getting ready for your success, we provide truly outstanding IT solutions."
      />
      <SolutionsServicesBlock />
      <SolutionsWhyBlock />
      <TestimonialsBlock
        titleText="Testimonials"
        items={TESTIMONIALS_DATA}
        slidesToShow={SliderOptions.slidesToShow}
        slidesToScroll={SliderOptions.slidesToScroll}
        slidesGap={SliderOptions.slidesGap}
      />
      <HelpBlock />
      <SubscribeBlock bgColor={theme.colors.secondary} />
    </>
  );
};

export default Solutions;
