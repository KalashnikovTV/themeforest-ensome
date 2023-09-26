import { memo, useCallback, useLayoutEffect, useRef, useState } from 'react';

import { ACCORDION_PANEL_HEIGHT } from '@constants/accordion-options';

import { IPanelProps } from './interfaces';
import { Content, Wrapper, Label, Paragraph } from './styles';

const Panel: React.FC<IPanelProps> = (props: IPanelProps) => {
  const { isActive, index, toggleTab, label, content } = props;

  const panelRef = useRef<HTMLDivElement | null>(null);

  const [panelHeight, setPanelHeight] = useState(ACCORDION_PANEL_HEIGHT);

  useLayoutEffect(() => {
    if (panelRef.current) {
      const height = panelRef.current.scrollHeight;
      setPanelHeight(height);
    }
  }, []);

  const handleClick = useCallback((): void => {
    toggleTab(index);
  }, [toggleTab, index]);

  return (
    <Wrapper role="tabpanel" isActivePanel={isActive}>
      <Label role="tab" isActivePanel={isActive} onClick={handleClick}>
        {label}
      </Label>
      <Content ref={panelRef} panelHeight={isActive ? panelHeight : ACCORDION_PANEL_HEIGHT} aria-hidden={!isActive}>
        <Paragraph isActivePanel={isActive}>{content}</Paragraph>
      </Content>
    </Wrapper>
  );
};

export default memo(Panel);
