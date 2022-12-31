import { SliderOptions } from '@constants/slider-options';
import BenefitsBlock from '@layouts/BenefitsBlock';
import BlogMiniBlock from '@layouts/BlogMiniBlock';
import HelpBlock from '@layouts/HelpBlock';
import NewestBlock from '@layouts/NewestBlock';
import PowerDataBlock from '@layouts/PowerDataBlock';
import RadicallyBlock from '@layouts/RadicallyBlock';
import SubscribeBlock from '@layouts/SubscribeBlock';
import SuccessBlock from '@layouts/SuccessBlock';
import TestimonialsBlock from '@layouts/TestimonialsBlock';
import { TESTIMONIALS_DATA, BLOG_DATA } from '@mocks/data';
import { theme } from '@theme/theme';

const Home: React.FC = () => {
  return (
    <>
      <PowerDataBlock />
      <NewestBlock />
      <RadicallyBlock />
      <SuccessBlock />
      <BenefitsBlock />
      <TestimonialsBlock
        titleText="Testimonials"
        items={TESTIMONIALS_DATA}
        slidesToShow={SliderOptions.slidesToShow}
        slidesToScroll={SliderOptions.slidesToScroll}
        slidesGap={SliderOptions.slidesGap}
      />

      <BlogMiniBlock
        titleText="Our blog"
        items={BLOG_DATA}
        slidesToShow={SliderOptions.slidesToShow}
        slidesToScroll={SliderOptions.slidesToScroll}
        slidesGap={SliderOptions.slidesGap}
      />
      <HelpBlock />
      <SubscribeBlock bgColor={theme.colors.secondary} />
    </>
  );
};

export default Home;
