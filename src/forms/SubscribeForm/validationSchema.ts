import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email('Please check your E-mail').required('E-mail is a required field')
});
