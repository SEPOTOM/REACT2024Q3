import { renderWithUser } from '@tests/utils';

import { ThemesComboBox } from '@/components';

import { Themes } from '@/consts';

test('ThemesComboBox displays all available themes as options', () => {
  const themes = Object.values(Themes);
  const { getByRole } = renderWithUser(<ThemesComboBox />);

  themes.forEach((theme) => {
    expect(
      getByRole('option', { name: new RegExp(theme, 'i') }),
    ).toBeInTheDocument();
  });
});
