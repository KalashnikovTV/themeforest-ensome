import { toast } from 'react-toastify';

interface IToastOptions {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export const showToast = ({ type, message }: IToastOptions): void => {
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
