import Accordion from '@components/Accordion';
import HelpBlock from '@layouts/HelpBlock';
import PageHeaderBlock from '@layouts/PageHeaderBlock';
import SubscribeBlock from '@layouts/SubscribeBlock';
import { FAQ_ACCORDION_DATA } from '@mocks/data';
import { theme } from '@theme/theme';

const FaQs: React.FC = () => {
  throw new Error('dd');
  return (
    <>
      <PageHeaderBlock
        isDetailed
        title="Frequently asked questions"
        subtitle="FAQs"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam."
      />
      <Accordion panels={FAQ_ACCORDION_DATA} />
      <HelpBlock />
      <SubscribeBlock bgColor={theme.colors.secondary} />
    </>
  );
};

FaQs.displayName = 'FaQs';

export default FaQs;
