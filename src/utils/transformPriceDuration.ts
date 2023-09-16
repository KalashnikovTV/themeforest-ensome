export const transformPriceDuration = (value: string): string => {
  switch (value) {
    case 'Mo':
      return '1 month';
    case 'Yr':
      return '1 year';
    default:
      return '';
  }
};
