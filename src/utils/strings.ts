export const capitalize = (str: string): string => {
  if (str.length === 0) {
    return str;
  }

  return `${str[0].toUpperCase()}${str.length > 1 ? str.slice(1) : ''}`;
};
