export const getDetailedProductQuery = (productId: number): string => {
  let pathname = `/products/${productId}`;
  const searchParams = new URLSearchParams({
    select: 'title,description,category,price,images',
  });

  pathname += `?${searchParams.toString()}`;

  return pathname;
};
