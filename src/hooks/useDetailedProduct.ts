import { useSearchParams } from 'react-router-dom';

import { useGetProductByIdQuery } from '@/store/api/apiSlice';

import { UseDetailedProductResult } from '@/hooks/types';

const useDetailedProduct = (): UseDetailedProductResult => {
  const [searchParams] = useSearchParams();

  const productSearchParam = searchParams.get('product');
  const productId = productSearchParam ? Number(productSearchParam) : 1;

  const { data: detailedProduct = null, ...response } =
    useGetProductByIdQuery(productId);

  return {
    detailedProduct,
    ...response,
  };
};

export default useDetailedProduct;
