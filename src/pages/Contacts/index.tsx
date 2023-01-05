import Breadcrumbs from '@components/Breadcrumbs';
import MapContainer from '@components/MapContainer';
import { Container } from '@theme/theme';

const subtitle = 'Contacts';

const Contacts: React.FC = () => {
  return (
    <>
      <Container>
        <Breadcrumbs transformLastLabel={(): string => subtitle} omitIndexList={null} />
      </Container>
      <MapContainer />
    </>
  );
};

export default Contacts;
