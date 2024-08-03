import { useRouter } from 'next/router';

import { useGetProductByIdQuery } from '@/store/api/apiSlice';

import { UseDetailedProductResult } from '@/hooks/types';

const useDetailedProduct = (): UseDetailedProductResult => {
  const router = useRouter();

  const productSearchParam = router.query.product;
  const isProductSearchParamString =
    !Array.isArray(productSearchParam) && productSearchParam;
  const productId = isProductSearchParamString ? Number(productSearchParam) : 1;

  const { data: detailedProduct = null, ...response } =
    useGetProductByIdQuery(productId);

  return {
    detailedProduct,
    ...response,
  };
};

export default useDetailedProduct;
