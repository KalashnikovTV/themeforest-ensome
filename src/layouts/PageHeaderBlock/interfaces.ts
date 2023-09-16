export interface IPageHeaderBlockProps {
  title: string;
  subtitle?: string;
  description?: string;
  isDetailed?: boolean;
  omitIndexList?: number[] | null;
  replaceDefaultTitle?: string;
}
