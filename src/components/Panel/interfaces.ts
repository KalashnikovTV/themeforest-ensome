export interface IPanelProps {
  activeTab: number;
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
