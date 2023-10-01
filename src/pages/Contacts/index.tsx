import Breadcrumbs from '@components/Breadcrumbs';
import MapContainer from '@components/MapContainer';
import HelpContactBlock from '@layouts/HelpContactBlock';
import { Container } from '@theme/theme';

import { WrapperBreadcrumbs } from './styles';

const subtitle = 'Contacts';

const Contacts: React.FC = () => {
  return (
    <>
      <WrapperBreadcrumbs>
        <Container>
          <Breadcrumbs transformLastLabel={(): string => subtitle} omitIndexList={null} />
        </Container>
      </WrapperBreadcrumbs>
      <HelpContactBlock />
      <MapContainer />
    </>
  );
};

Contacts.displayName = 'Contacts';

export default Contacts;
