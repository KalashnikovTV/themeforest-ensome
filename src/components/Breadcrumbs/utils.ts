import { CharacterMap } from './interfaces';

const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0];
};

export const convertBreadcrumb = (
  title: string,
  toUpperCase: boolean | null,
  replaceCharacterList: CharacterMap[] | null
): string => {
  let transformedTitle = getPathFromUrl(title);

  if (replaceCharacterList) {
    for (let i = 0; i < replaceCharacterList.length; i++) {
      transformedTitle = transformedTitle.replaceAll(replaceCharacterList[i].from, replaceCharacterList[i].to);
    }
  }

  return toUpperCase
    ? decodeURI(transformedTitle)
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : decodeURI(transformedTitle);
};
