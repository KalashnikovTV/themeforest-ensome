import BenefitsBlock from '@layouts/BenefitsBlock';
import NewestBlock from '@layouts/NewestBlock';
import PowerDataBlock from '@layouts/PowerDataBlock';
import RadicallyBlock from '@layouts/RadicallyBlock';
import SuccessBlock from '@layouts/SuccessBlock';

const Home: React.FC = () => {
  return (
    <>
      <PowerDataBlock />
      <NewestBlock />
      <RadicallyBlock />
      <SuccessBlock />
      <BenefitsBlock />
    </>
  );
};

export default Home;
