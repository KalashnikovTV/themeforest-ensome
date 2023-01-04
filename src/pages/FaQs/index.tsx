import HelpBlock from '@layouts/HelpBlock';
import PageHeaderBlock from '@layouts/PageHeaderBlock';
import SubscribeBlock from '@layouts/SubscribeBlock';
import { theme } from '@theme/theme';

const FaQs: React.FC = () => {
  return (
    <>
      <PageHeaderBlock
        isDetailed
        title="Frequently asked questions"
        subtitle="FAQs"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam."
      />
      <HelpBlock />
      <SubscribeBlock bgColor={theme.colors.secondary} />
    </>
  );
};

export default FaQs;
