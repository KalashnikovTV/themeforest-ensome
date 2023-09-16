import AnalyticsBlock from '@layouts/AnalyticsBlock';
import HelpBlock from '@layouts/HelpBlock';
import PageHeaderBlock from '@layouts/PageHeaderBlock';
import SubscribeBlock from '@layouts/SubscribeBlock';
import SuccessBlock from '@layouts/SuccessBlock';
import { SERVICES_DATA } from '@mocks/data';
import { theme } from '@theme/theme';

const Services: React.FC = () => {
  return (
    <>
      <PageHeaderBlock
        isDetailed
        title="Data Analytics Services"
        subtitle="Services"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore."
      />
      <AnalyticsBlock items={SERVICES_DATA} />
      <SuccessBlock />
      <HelpBlock />
      <SubscribeBlock bgColor={theme.colors.secondary} />
    </>
  );
};

export default Services;
