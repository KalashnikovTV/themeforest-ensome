import { Oval } from 'react-loader-spinner';

import { theme } from '@theme/theme';

const Loading: React.FC = () => {
  return (
    <Oval
      height={50}
      width={50}
      color={theme.colors.primary}
      wrapperStyle={{ margin: '0 auto' }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={theme.colors.secondary}
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  );
};

export default Loading;
