import { memo, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useLatest } from '@hooks/useLatest';

import { IModalProps } from './interfaces';

import { ModalContent, ModalOverlay } from './styles';

const Modal: React.FC<IModalProps> = ({ opened, onClose, children }: IModalProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const latestHandler = useLatest(onClose);

  const calcScroll = useCallback((): number => {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }, []);

  useEffect(() => {
    if (!elementRef.current) {
      elementRef.current = document.createElement('div');
    }
  }, []);

  useEffect(() => {
    const el = elementRef.current as HTMLDivElement;
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  useEffect(() => {
    if (opened) {
      const scroll = calcScroll();

      document.body.style.overflowY = 'hidden';
      document.body.style.marginRight = `${scroll}px`;

      return () => {
        document.body.style.overflowY = 'initial';
        document.body.style.marginRight = `0px`;
      };
    }
  }, [opened, calcScroll]);

  const handleOnClickOverlay = useCallback((): void => {
    latestHandler.current();
  }, [latestHandler]);

  const handleOnClickContent = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  }, []);

  if (!opened) {
    return null;
  }

  return createPortal(
    <>
      <ModalOverlay onClick={handleOnClickOverlay} />
      <ModalContent onClick={handleOnClickContent}>{children}</ModalContent>
    </>,
    elementRef.current as HTMLDivElement
  );
};

export default memo(Modal);
