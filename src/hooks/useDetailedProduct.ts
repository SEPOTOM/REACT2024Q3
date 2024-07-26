import { useSearchParams } from 'react-router-dom';

import { useGetProductByIdQuery } from '@/store/api/apiSlice';

import { DetailedProduct } from '@services/types';

const useDetailedProduct = (): DetailedProduct | null => {
  const [searchParams] = useSearchParams();

  const productSearchParam = searchParams.get('product');
  const productId = productSearchParam ? Number(productSearchParam) : 1;

  const { data: detailedProduct } = useGetProductByIdQuery(productId);

  return detailedProduct ? detailedProduct : null;
};

export default useDetailedProduct;
