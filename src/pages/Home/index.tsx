import BenefitsBlock from '@layouts/BenefitsBlock';
import HelpBlock from '@layouts/HelpBlock';
import NewestBlock from '@layouts/NewestBlock';
import PowerDataBlock from '@layouts/PowerDataBlock';
import RadicallyBlock from '@layouts/RadicallyBlock';
import SubscribeBlock from '@layouts/SubscribeBlock';
import SuccessBlock from '@layouts/SuccessBlock';
import { theme } from '@theme/theme';

const Home: React.FC = () => {
  return (
    <>
      <PowerDataBlock />
      <NewestBlock />
      <RadicallyBlock />
      <SuccessBlock />
      <BenefitsBlock />

      <HelpBlock />
      <SubscribeBlock bgColor={theme.colors.secondary} />
    </>
  );
};

export default Home;
