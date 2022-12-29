import { sendForm } from '@emailjs/browser';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { defaultInitialValues as initialValues } from './constants';

import { IToastOptions } from './interfaces';
import { Wrapper, Form, InputWrapper, Button, Input, Span } from './styles';
import { validationSchema } from './validationSchema';

const SubscribeForm: React.FC = () => {
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const showToast = ({ type, message }: IToastOptions): void => {
    toast[type](message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setIsDisabledButton(true);

      sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
        .then(
          () => {
            showToast({ type: 'success', message: 'You`ve been successfully subscribed!' });
            resetForm();
          },
          () => {
            showToast({ type: 'error', message: 'Service is unavailable. Please try to subscribe later...' });
          }
        )
        .finally(() => setIsDisabledButton(false));
    }
  });

  return (
    <Wrapper>
      <Form ref={formRef} onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input name="email" placeholder="Your e-mail" value={formik.values.email} onChange={formik.handleChange} />
          <Button disabled={isDisabledButton} type="submit">
            Send
          </Button>
          {formik.touched.email && Boolean(formik.values.email) && <Span>{formik.errors.email}</Span>}
        </InputWrapper>
      </Form>
      <ToastContainer />
    </Wrapper>
  );
};

export default SubscribeForm;
