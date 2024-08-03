export const validatePage = (page?: string | string[]): number => {
  if (Array.isArray(page) || !page) {
    return 1;
  }

  return Number(page);
};
