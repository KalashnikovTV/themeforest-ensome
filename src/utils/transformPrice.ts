export const transformPrice = (value: string): string => {
  switch (value) {
    case '$00':
      return '0.01';
    case 'Custom':
      return '999.99';
    default:
      return Number(value.replace(/[^0-9]/, '')).toString();
  }
};
