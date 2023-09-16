export interface IModalProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
