export const rgbToRgba = (rgb: string, alpha: string): string => {
  if (rgb && alpha) {
    const rgbValue = rgb.match(/\d+/g)?.join(', ');
    return `rgba(${rgbValue}, ${alpha})`;
  }
  return 'none';
};
