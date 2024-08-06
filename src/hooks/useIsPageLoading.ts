import { useRouter } from 'next/router';
import { NextFetchEvent } from 'next/server';
import { useEffect, useState } from 'react';

const useIsPageLoading = () => {
  const [isSearchPageLoading, setIsSearchPageLoading] = useState(false);
  const [isDetailsPageLoading, setIsDetailsPageLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const routeEventStart = (e: NextFetchEvent) => {
      if (String(e).includes('product')) {
        setIsDetailsPageLoading(true);
      } else {
        setIsSearchPageLoading(true);
      }
    };
    const routeEventEnd = (e: NextFetchEvent) => {
      if (String(e).includes('product')) {
        setIsDetailsPageLoading(false);
      } else {
        setIsSearchPageLoading(false);
      }
    };

    router.events.on('routeChangeStart', routeEventStart);
    router.events.on('routeChangeComplete', routeEventEnd);
    router.events.on('routeChangeError', routeEventEnd);
    return () => {
      router.events.off('routeChangeStart', routeEventStart);
      router.events.off('routeChangeComplete', routeEventEnd);
      router.events.off('routeChangeError', routeEventEnd);
    };
  }, [router]);

  return {
    isSearchPageLoading,
    isDetailsPageLoading,
  };
};

export default useIsPageLoading;
