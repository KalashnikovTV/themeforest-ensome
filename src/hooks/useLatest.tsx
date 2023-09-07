import { MutableRefObject, useInsertionEffect, useRef } from 'react';

export function useLatest<T>(value: T): MutableRefObject<T> {
  const valueRef = useRef(value);

  useInsertionEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
