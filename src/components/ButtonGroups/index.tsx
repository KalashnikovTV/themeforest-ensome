import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { IButtonGroupsProps } from './interfaces';
import { Wrapper, Button } from './styles';

const ButtonGroups: React.FC<IButtonGroupsProps> = ({ items, numActiveIndex = 0, onItemClick }: IButtonGroupsProps) => {
  const [activeIndex, setActiveIndex] = useState(numActiveIndex);

  const firstActiveButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstActiveButtonRef.current) {
      firstActiveButtonRef.current.click();
    }
  }, []);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      const index = Number(e.currentTarget.value);

      onItemClick(items[index], index);
      setActiveIndex(index);
    },
    [items, onItemClick]
  );

  return (
    <Wrapper>
      {items?.map((label, index) => {
        return (
          <Button
            key={`${label}-${index}`}
            ref={index === activeIndex ? firstActiveButtonRef : null}
            isActiveButton={index === activeIndex}
            value={index}
            onClick={handleButtonClick}
          >
            {label}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default memo(ButtonGroups);
