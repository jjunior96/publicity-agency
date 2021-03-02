import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render link and children', () => {
    renderWithTheme(<Footer />);

    // const children = screen.getByText(/anything/i);

    // expect(children).toBeInTheDocument();
    // expect(children).toHaveAttribute('href', '/my-page');

    screen.logTestingPlaygroundURL();
  });
});
