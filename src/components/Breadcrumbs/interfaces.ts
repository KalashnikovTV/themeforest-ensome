export interface CharacterMap {
  from: string;
  to: string;
}

export interface IBreadcrumbsProps {
  rootLabel?: string | null;
  omitRootLabel?: boolean;
  labelsToUppercase?: boolean | null;
  replaceCharacterList?: Array<CharacterMap> | null;
  omitIndexList?: Array<number> | null;
}

export interface IBreadcrumb {
  breadcrumb: string;
  path: string;
}

export interface IBreadcrumbItemProps {
  isActiveItem: boolean;
}
