import { useRouter } from 'next/navigation';

type AppRouter = ReturnType<typeof useRouter>;

const createFakeRouter = (router?: Partial<AppRouter>): AppRouter => {
  return {
    back: vi.fn(),
    forward: vi.fn(),
    prefetch: vi.fn(),
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    ...router,
  };
};

export { createFakeRouter };
