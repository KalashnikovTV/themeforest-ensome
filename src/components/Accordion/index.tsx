import { memo, useCallback, useState } from 'react';

import Panel from '@components/Panel';
import { ACCORDION_TAB_ACTIVE } from '@constants/accordion-options';
import { Container } from '@theme/theme';

import { IAccordionProps } from './interfaces';
import { Wrapper } from './styles';

const Accordion: React.FC<IAccordionProps> = ({ panels }: IAccordionProps) => {
  const [activeTab, setActiveTab] = useState(ACCORDION_TAB_ACTIVE);

  const toggleTab = useCallback((index: number): void => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <Container>
      <Wrapper>
        {panels.map((panel, index) => (
          <Panel key={index} activeTab={activeTab} index={index} toggleTab={toggleTab} {...panel} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default memo(Accordion);
