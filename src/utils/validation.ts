export const validatePage = (page?: string): number => {
  return page ? Number(page) : 1;
};
