import Breadcrumbs from '@components/Breadcrumbs';
import { Container } from '@theme/theme';

const subtitle = 'Contacts';

const Contacts: React.FC = () => {
  return (
    <>
      <Container>
        <Breadcrumbs transformLastLabel={(): string => subtitle} omitIndexList={null} />
      </Container>
    </>
  );
};

export default Contacts;
