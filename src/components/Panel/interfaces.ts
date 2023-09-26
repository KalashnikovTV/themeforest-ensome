export interface IPanelProps {
  isActive: boolean;
  index: number;
  toggleTab: (index: number) => void;
  label: string;
  content: string;
}

export interface IPanelStyleProps {
  isActivePanel: boolean;
}

export interface IContentStyleProps {
  panelHeight: number;
}
