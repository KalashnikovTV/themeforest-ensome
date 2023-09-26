import { PayPalButtons, PayPalButtonsComponentProps, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect, useMemo, useState } from 'react';

import Loading from '@components/Loading';
import { IPayPalFormProps } from '@forms/PayPalForm/interfaces';
import { showToast } from '@utils/showToast';

const PayPalButton: React.FC<IPayPalFormProps> = ({ price, description, onClose }: IPayPalFormProps) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: { ...options },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = useMemo(() => !isInitialized || isPending, [isInitialized, isPending]);

  const buttonConfig: PayPalButtonsComponentProps = {
    style: { color: 'blue', layout: 'horizontal', label: 'buynow', height: 35 },
    disabled: isLoading,
    forceReRender: [price, description],
    createOrder: (_, actions) => actions.order.create({ purchase_units: [{ amount: { value: price }, description }] }),
    onApprove: (_, actions) =>
      actions.order
        ? actions.order
            .capture()
            .then(() => {
              showToast({ type: 'success', message: 'Payment completed. Thank you!' });
            })
            .catch(() => {
              showToast({ type: 'error', message: 'Something went wrong. Please try to pay later...' });
            })
            .finally(() => {
              onClose();
            })
        : Promise.resolve().then(() => {
            showToast({ type: 'error', message: 'Service is unavailable. Please try to payment later...' });
          }),
    onInit: () => setIsInitialized(true),
    onCancel: () => onClose(),
  };

  return (
    <>
      {isLoading && <Loading />}
      <PayPalButtons {...buttonConfig} />
    </>
  );
};

export default PayPalButton;
