import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

import { server } from '@tests/mocks/server';
import { createFakeRouter } from '@tests/mocks/router';

vi.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: () => createFakeRouter(),
  useSearchParams: vi.fn(),
  useParams: vi.fn(),
  usePathname: vi.fn(),
}));

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});
