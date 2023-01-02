export interface IButtonGroupsProps {
  items: string[];
  numActiveIndex?: number;
  onItemClick: (item: string, index: number) => void;
}

export interface IButtonProps {
  isActiveButton: boolean;
}
