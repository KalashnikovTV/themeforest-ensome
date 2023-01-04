export interface IPageHeaderBlockProps {
  title: string;
  subtitle?: string;
  description?: string;
  isDetailed?: boolean;
  omitIndexList?: Array<number> | null;
}
