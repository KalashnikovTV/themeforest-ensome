import { memo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { IModalProps } from './interfaces';

import { ModalContent, ModalOverlay } from './styles';

const Modal: React.FC<IModalProps> = ({ isOpenModal, setIsOpenModal, children }: IModalProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  if (!elementRef.current) elementRef.current = document.createElement('div');

  useEffect(() => {
    const el = elementRef.current as HTMLDivElement;

    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  const handleOnClickOverlay = (): void => {
    document.body.style.overflow = 'initial';
    setIsOpenModal(false);
  };

  const handleOnClickContent = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  if (!isOpenModal) {
    return null;
  } else {
    document.body.style.overflow = 'hidden';
  }

  return createPortal(
    <>
      <ModalOverlay onClick={handleOnClickOverlay} />
      <ModalContent onClick={handleOnClickContent}>{children}</ModalContent>
    </>,
    elementRef.current
  );
};

export default memo(Modal);
