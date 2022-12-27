export interface IModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
