import { memo, useCallback, useMemo, useState } from 'react';

import Panel from '@components/Panel';
import { ACCORDION_TAB_ACTIVE } from '@constants/accordion-options';
import { Container } from '@theme/theme';

import { IAccordionProps } from './interfaces';
import { Wrapper } from './styles';

const Accordion: React.FC<IAccordionProps> = ({ panels }: IAccordionProps) => {
  const [activeTabs, setActiveTabs] = useState<number[]>([ACCORDION_TAB_ACTIVE]);

  const toggleTab = useCallback((index: number): void => {
    setActiveTabs((prevTabs) => {
      if (prevTabs.includes(index)) {
        return prevTabs.filter((tabIndex) => tabIndex !== index);
      }

      return [...prevTabs, index];
    });
  }, []);

  const isActiveTab = useMemo(
    () =>
      (index: number): boolean =>
        activeTabs.includes(index),
    [activeTabs]
  );

  return (
    <Container>
      <Wrapper>
        {panels.map((panel, index) => (
          <Panel key={index} isActive={isActiveTab(index)} index={index} toggleTab={toggleTab} {...panel} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default memo(Accordion);
