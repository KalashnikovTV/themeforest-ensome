export interface CharacterMap {
  from: string;
  to: string;
}

export interface IBreadcrumbsProps {
  rootLabel?: string | null;
  omitRootLabel?: boolean;
  labelsToUppercase?: boolean | null;
  replaceCharacterList?: CharacterMap[] | null;
  omitIndexList?: number[] | null;
  transformLastLabel?: ((title: string) => string) | null;
}

export interface IBreadcrumb {
  breadcrumb: string;
  path: string;
}

export interface IBreadcrumbItemProps {
  $isActiveItem: boolean;
}
