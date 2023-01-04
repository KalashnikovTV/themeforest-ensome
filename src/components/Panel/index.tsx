import { memo, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { IPanelProps } from './interfaces';
import { Content, Wrapper, Label, Paragraph } from './styles';

const Panel: React.FC<IPanelProps> = (props: IPanelProps) => {
  const { activeTab, index, toggleTab, label, content } = props;

  const panelRef = useRef<HTMLDivElement | null>(null);

  const [panelHeight, setPanelHeight] = useState(0);

  useLayoutEffect(() => {
    if (panelRef.current) {
      const height = panelRef.current.scrollHeight;
      setPanelHeight(height);
    }
  }, []);

  const isActive = useMemo(() => activeTab === index, [activeTab, index]);

  return (
    <Wrapper role="tabpanel" isActivePanel={isActive}>
      <Label role="tab" isActivePanel={isActive} onClick={(): void => toggleTab(index)}>
        {label}
      </Label>
      <Content ref={panelRef} panelHeight={isActive ? panelHeight : 0} aria-hidden={!isActive}>
        <Paragraph isActivePanel={isActive}>{content}</Paragraph>
      </Content>
    </Wrapper>
  );
};

export default memo(Panel);
