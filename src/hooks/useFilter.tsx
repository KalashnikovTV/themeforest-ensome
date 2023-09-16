import { useMemo, useState } from 'react';

interface IFilterItems {
  id: number;
  path: string;
  alt: string;
  title: string;
  subtitle?: string;
  text: string;
  link?: string;
}

interface IFilterHookReturn {
  enteredItems: IFilterItems[];
  setEnteredItems: React.Dispatch<React.SetStateAction<IFilterItems[]>>;
  activeItem: IFilterItems | undefined;
  filteredItems: IFilterItems[];
}

export const useFilter = (items: IFilterItems[], filterProp: string | undefined): IFilterHookReturn => {
  const [enteredItems, setEnteredItems] = useState(items);

  const activeItem = useMemo(
    () => enteredItems.find(({ id }) => id === Number(filterProp)),
    [enteredItems, filterProp]
  );

  const filteredItems = useMemo(
    () => enteredItems.filter((item) => item.id !== Number(filterProp)),
    [enteredItems, filterProp]
  );

  return {
    enteredItems,
    setEnteredItems,
    activeItem,
    filteredItems,
  };
};
