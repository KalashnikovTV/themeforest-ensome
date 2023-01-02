import { memo, useState } from 'react';

import ButtonGroups from '@components/ButtonGroups';
import Modal from '@components/Modal';

import PricingPossibilities from '@components/PricingPossibilities';

import { transformPriceDuration } from '@utils/transformPriceDuration';

import { IPricingCardItemProps } from './interfaces';

import {
  Card,
  CardTitle,
  PriceWrapper,
  Price,
  Button,
  PricingModalWrapper,
  PricingModalTitle,
  PricingModalSpan
} from './styles';

const PricingCardItem: React.FC<IPricingCardItemProps> = (props: IPricingCardItemProps) => {
  const { title, price, durations, possibilities } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);

  const handleOnClickButton = (): void => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Card>
        <CardTitle>{title}</CardTitle>
        <PriceWrapper>
          <Price>{price}</Price>
          <ButtonGroups items={durations} onItemClick={(item): void => setSelectedDuration(item)} />
        </PriceWrapper>
        <Button onClick={handleOnClickButton}>Choose plan</Button>

        <PricingPossibilities possibilities={possibilities} />
      </Card>

      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <PricingModalWrapper>
          <PricingModalTitle>Payment</PricingModalTitle>
          <PricingModalTitle>
            Plan: <PricingModalSpan>{title}</PricingModalSpan>
          </PricingModalTitle>
          <PricingModalTitle>
            Price: <PricingModalSpan>{price}</PricingModalSpan>
          </PricingModalTitle>
          <PricingModalTitle>
            Duration: <PricingModalSpan>{transformPriceDuration(selectedDuration)}</PricingModalSpan>
          </PricingModalTitle>
          <PricingPossibilities possibilities={possibilities} />

          <h1>PAYPAL tyt bydet</h1>
        </PricingModalWrapper>
      </Modal>
    </>
  );
};

export default memo(PricingCardItem);
