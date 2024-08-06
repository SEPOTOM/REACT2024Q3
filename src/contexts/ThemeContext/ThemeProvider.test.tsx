import { renderWithUser } from '@tests/utils';

import { useTheme, useUpdateTheme } from '@/contexts';

import ThemesProvider from '@/contexts/ThemeContext/ThemeProvider';

import { Themes } from '@/consts';

const TestComponent = () => {
  const theme = useTheme();
  const updateTheme = useUpdateTheme();

  return (
    <div>
      <p>{theme}</p>
      <button type="button" onClick={() => updateTheme(Themes.DARK)}>
        Change theme
      </button>
    </div>
  );
};

test('ThemeProvider provides a possibility to change the theme', async () => {
  const { user, getByRole } = renderWithUser(
    <ThemesProvider>
      <TestComponent />
    </ThemesProvider>,
  );

  await user.click(getByRole('button'));

  expect(getByRole('paragraph')).toHaveTextContent(Themes.DARK);
});
