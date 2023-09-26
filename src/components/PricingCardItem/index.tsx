import { memo, useState } from 'react';

import ButtonGroups from '@components/ButtonGroups';
import Modal from '@components/Modal';
import PricingPossibilities from '@components/PricingPossibilities';
import PayPalForm from '@forms/PayPalForm';
import { transformPrice } from '@utils/transformPrice';
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
  PricingModalSpan,
} from './styles';

const PricingCardItem: React.FC<IPricingCardItemProps> = (props: IPricingCardItemProps) => {
  const { title, price, durations, possibilities } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(durations[0]);

  const handleOpenModal = (): void => {
    setIsOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Card>
        <CardTitle>{title}</CardTitle>
        <PriceWrapper>
          <Price>{price}</Price>
          <ButtonGroups items={durations} onItemClick={(item): void => setSelectedDuration(item)} />
        </PriceWrapper>
        <Button onClick={handleOpenModal}>Choose plan</Button>

        <PricingPossibilities possibilities={possibilities} />
      </Card>

      <Modal opened={isOpenModal} onClose={handleCloseModal}>
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

          <PayPalForm
            price={transformPrice(price)}
            description={`Plan: ${title}. Duration: ${transformPriceDuration(selectedDuration)}`}
            onClose={handleCloseModal}
          />
        </PricingModalWrapper>
      </Modal>
    </>
  );
};

export default memo(PricingCardItem);
