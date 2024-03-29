import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import PayPalButtons from '@components/PayPalButton';

import { IPayPalFormProps } from './interfaces';

const PayPalForm: React.FC<IPayPalFormProps> = ({ price, description, onClose }: IPayPalFormProps) => {
  return (
    <PayPalScriptProvider
      deferLoading
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
        components: 'buttons',
      }}
    >
      <PayPalButtons price={price} description={description} onClose={onClose} />
    </PayPalScriptProvider>
  );
};

export default PayPalForm;
